import type { NextPage } from 'next'
import {
  requestStreamDecks, getStreamDecks, StreamDeckWeb
} from '@elgato-stream-deck/webhid'
import dynamic from 'next/dynamic'
import { MouseEvent, useCallback, useState } from 'react'
import { chakra, Box, Heading, Text, SimpleGrid, Flex, Button } from '@chakra-ui/react'
import { IEmojiData as EmojiData } from 'emoji-picker-react'
import { DeckButton } from '../components/DeckButton'
import type { Maybe } from '../types'

const EmojiPicker = dynamic(
  () => import('emoji-picker-react'),
  { ssr: false },
)

const SDButton: React.FC = () => {
  const [showPicker, setShowPicker] = useState(false)
  const [emoji, setEmoji] = useState<string | null>(null)

  const pick = () => {
    setShowPicker(true)
  }

  const select = (_evt: MouseEvent, emojiData: EmojiData) => {
    setEmoji(emojiData.emoji)
    setShowPicker(false)
  }


  return (
    <Box
      border="2px solid black"
      borderRadius={5}
      h="3vmin" w="3vmin"
      onClick={pick}
    >
      {showPicker && <EmojiPicker onEmojiClick={select}/>}
      {emoji && <Text>{emoji}</Text>}

    </Box>
  )
}

const ROWS = 3
const COLS = 5

const Home: NextPage = () => {
  const [device, setDevice] = useState<Maybe<StreamDeckWeb>>(null)

  const load = useCallback(async () => {
    let [device] = await getStreamDecks()
    if(!device) {
      [device] = await requestStreamDecks()
    }
    if(!device) {
      console.error('Couldn’t get a Stream Deck')
    } else {
      setDevice(device)
    }
    console.log({ device })
  }, [])

  return (
    <Box>
      <chakra.header>
        <Heading>Stream Deck Testing</Heading>
      </chakra.header>

      <chakra.main>
        <Flex justify="center">
          <Button onClick={load}>Connect</Button>
        </Flex>
        <SimpleGrid columns={COLS} spacing={1} w="fit-content">
          {
            Array.from({ length: ROWS }).map((_, ridx) => {
              return Array.from({ length: COLS }).map((_, cidx) => {
                return (
                  <DeckButton
                    key={ridx * ROWS + cidx * COLS}
                    h="30vmin" w="30vmin"
                    {...{ device }}
                  />
                )
              })
            })
          }
        </SimpleGrid>
      </chakra.main>

      <chakra.footer>
      </chakra.footer>
    </Box>
  )
}

export default Home
