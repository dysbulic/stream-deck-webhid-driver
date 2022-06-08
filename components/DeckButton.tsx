import { Box, Button, ButtonProps, Image, Input } from "@chakra-ui/react"
import { StreamDeckWeb } from "@elgato-stream-deck/webhid"
import { FormEvent, MouseEvent, MouseEventHandler, useRef, useState } from "react"
import type { Maybe } from "../types"

export const DeckButton: React.FC<
  ButtonProps & { device: Maybe<StreamDeckWeb> }
> = (
  ({ device, ...props }) => {
    const [image, setImage] = useState<Maybe<string>>(null)
    const file = useRef<HTMLInputElement>(null)

    const configure = (evt: FormEvent) => {
      evt.preventDefault()
      const { files } = evt.target as HTMLInputElement
      const [file] = Array.from(files ?? [])
      if(file) {
        const reader = new FileReader();
        reader.onload = (
          (evt: ProgressEvent<FileReader>) => {
            const { result } = evt.target ?? {}
            const url = `data:image/svg+xml;charset=utf8,${encodeURIComponent(result)}`
            setImage(url)
            console.info({ url })
          }
        )
        reader.readAsText(file, 'UTF-8')
        // const url = URL.createObjectURL(file)
      }
    }

    return (
      <Button
        border="4px solid black"
        borderRadius={15}
        {...props}
        onClick={(evt: MouseEvent) => {
          console.info({ evt })
          file.current?.click()
        }}
        p={0}
      >
        {image && <Image w="100%" h="100%" src={image}/>}
        <Box as="form" visibility="hidden" w={0}>
          <Input
            type="file"
            onChange={configure}
            ref={file}
          />
        </Box>
      </Button>
    )
  }
)
