import { Box, Button, ButtonProps, Image as ChakraImage, Input, Stack, Text } from '@chakra-ui/react'
import { StreamDeckWeb } from '@elgato-stream-deck/webhid'
import { ChangeEvent, FormEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import type { Maybe } from '../types'
import useAnimationFrame from 'use-animation-frame'

export const DeckTimeButton: React.FC<
  ButtonProps & { deck: Maybe<StreamDeckWeb>, index: number }
> = (
  ({ deck, index, ...props }) => {
    const [fill, setFill] = useState('#000000')
    const [size, setSize] = useState<Maybe<number>>(null)
    const [time, setTime] = useState('')
    const [ctx, setCtx] = (
      useState<Maybe<CanvasRenderingContext2D>>(null)
    )
    const [showPicker, setShowPicker] = useState(false)

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

    const redraw = useCallback(async () => {
      const now = new Date()
      const start = new Date(
        now.getFullYear(), now.getMonth(), now.getDate()
      )
      const offset = now.getTime() - start.getTime()
      const percent = offset / (24 * 60 * 60 * 1000)

      const hour = Math.floor(percent * 10)
      const minute = Math.floor(percent * 1000) - hour * 100
      const second = Math.floor(percent * 100000) - hour * 10000 - minute * 100

      const time = (
        `${hour}:${
          minute.toString().padStart(2, '0')
        }:${
          second.toString().padStart(2, '0')
        }`
      )
      setTime(time)

      console.info({ index, t: 'redrawing', deck, ctx, size })
      if(!deck || !ctx || !size) return

      ctx.clearRect(0, 0, size, size)

      ctx.beginPath()
      ctx.rect(0, 0, size, size)
      ctx.fillStyle = fill
      ctx.fill()

      ctx.font = `${size * 0.9}px "Arial"`
      ctx.strokeStyle = 'blue'
      ctx.lineWidth = 1
      ctx.strokeText(time, size * 0.05, size * 0.8, size * 0.9)
      ctx.fillStyle = 'white'
      ctx.fillText(time, size * 0.05, size * 0.8, size * 0.9)

      const { data: imgData } = ctx.getImageData(0, 0, size, size)
      await deck.fillKeyBuffer(
        index, Buffer.from(imgData), { format: 'rgba' }
      )

      console.info({ index, t: 'redraw()'})
    }, [deck, ctx, size, index, fill])

    useAnimationFrame(redraw, [])

    const changeFill = useCallback(
      ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setFill(value)
      },
      [],
    )

    const click = useCallback(
      (evt: MouseEvent) => {
        if(evt.target instanceof HTMLButtonElement) {
          setShowPicker(true)
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
            <Text>{time}</Text>
          </Button>
        )}
      </>
    )
  }
)
