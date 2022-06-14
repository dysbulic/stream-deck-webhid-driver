import { Box, Button, ButtonProps, Image as ChakraImage, Input, Stack } from "@chakra-ui/react"
import { StreamDeckWeb } from "@elgato-stream-deck/webhid"
import { ChangeEvent, FormEvent, MouseEvent, useCallback, useEffect, useRef, useState } from "react"
import type { Maybe } from "../types"

export const TIMEOUT = 50

export const DeckButton: React.FC<
  ButtonProps & { deck: Maybe<StreamDeckWeb>, index: number }
> = (
  ({ deck, index, ...props }) => {
    const [image, setImage] = useState<Maybe<string>>(null)
    const [fill, setFill] = useState('transparent')
    const [size, setSize] = useState<Maybe<number>>(null)
    const [ctx, setCtx] = (
      useState<Maybe<CanvasRenderingContext2D>>(null)
    )
    const [showPicker, setShowPicker] = useState(false)
    const file = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if(deck) {
        const canvas = document.createElement('canvas')
        canvas.width = deck.ICON_SIZE
    		canvas.height = deck.ICON_SIZE
        setSize(deck.ICON_SIZE)
        setCtx(canvas.getContext('2d'))

        deck.setBrightness(100)
      }
    }, [deck])

    const running = useRef(false)
    const redraw = useCallback(async () => {
      if(running.current) return
      if(!deck || !ctx || !size) return
      running.current = true

      ctx.beginPath()
      ctx.rect(0, 0, size, size)
      ctx.fillStyle = fill
      ctx.fill()

      console.info({ image, index })
      if(image) {
        const obj = await new Promise<HTMLImageElement>((resolve) => {
          const img = new Image()
          img.addEventListener('load', async () => {
            resolve(img)
          })
          img.src = image
        })
        ctx.drawImage(obj, 0, 0, size, size)
      }

      const id = ctx.getImageData(0, 0, size, size)
      await deck.fillKeyBuffer(
        index, Buffer.from(id.data), { format: 'rgba' }
      )

      timeout.current = window.setTimeout(
        () => requestAnimationFrame(redraw),
        TIMEOUT,
      )

      running.current = false
    }, [deck, ctx, size, fill, index, image])

    const timeout = useRef<Maybe<number>>(null)
    useEffect(() => {
      if(timeout.current) {
        // window.cancelAnimationFrame(frame.current)
        window.clearTimeout(timeout.current)
      }
      redraw()
    }, [redraw, fill, image])


    const configure = useCallback((evt: FormEvent) => {
      evt.preventDefault()
      const { files } = evt.target as HTMLInputElement
      const [file] = Array.from(files ?? [])
      let { type } = file
      const { name } = file
      if(name.endsWith('svg')) type = 'image/svg+xml'

      if(file) {
        const reader = new FileReader();
        reader.onload = (
          (evt: ProgressEvent<FileReader>) => {
            const { result } = evt.target ?? {}
            if(result) {
              let str = result
              if(typeof result !== 'string') {
                const uint8 = new Uint8Array(result)
                if(type.endsWith('xml')) {
                  str = encodeURIComponent(
                    String.fromCharCode(...uint8)
                  )
                } else {
                  str = Buffer.from(uint8).toString('base64')
                  type += ';base64'
                }
              }
              str = `data:${type},${str}`
              console.info({ str })
              setImage(str)
            }
          }
        )
        reader.readAsArrayBuffer(file)
        // reader.readAsText(file, 'UTF-8')
        // setImage(URL.createObjectURL(file))
      }
    }, [])

    const changeFill = useCallback(
      ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setFill(value)
      },
      [ ],
    )

    const click = useCallback(
      (evt: MouseEvent) => {
        if(evt.target instanceof HTMLButtonElement) {
          if(evt.ctrlKey) {
            setShowPicker(true)
          } else {
            file.current?.click()
          }
        }
      },
      []
    )

    return (
      <>
        {showPicker ? (
          <Stack
            as="form"
            align="center"
            onSubmit={(evt) => {
              evt.preventDefault()
              setShowPicker(false)
            }}
          >
            <Input
              value={fill}
              type="color"
              onInput={changeFill}
            />
            <Button type="submit">OK</Button>
          </Stack>
        ) : (
          <Button
            border="4px solid black"
            borderRadius={15}
            {...props}
            bg={fill}
            _hover={{ background: fill, opacity: 0.5 }}
            onClick={click}
            p={0}
          >
            {image && (
              <ChakraImage
                alt={`Button ${index + 1}`}
                w="100%" h="100%"
                src={image}
                pointerEvents="none"
              />
            )}
            <Box as="form" visibility="hidden" w={0}>
              <Input
                type="file"
                onChange={configure}
                ref={file}
              />
            </Box>
          </Button>
        )}
      </>
    )
  }
)
