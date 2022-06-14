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
  const [deck, setDeck] = useState<Maybe<StreamDeckWeb>>(null)
  const [rows, setRows] = useState(ROWS)
  const [cols, setCols] = useState(COLS)

  const load = useCallback(async () => {
    let [device] = await getStreamDecks()
    console.info({ d1: device })
    if(!device) {
      [device] = await requestStreamDecks()
    }
    console.info({ d2: device })
    if(!device) {
      console.error('Couldn’t get a Stream Deck')
    } else {
      setDeck(device)
      setRows(device.KEY_ROWS)
      setCols(device.KEY_COLUMNS)
    }
    console.log({ device })
  }, [])

  return (
    <Box>
      <chakra.header>
        <Heading textAlign="center">Stream Deck Testing</Heading>
      </chakra.header>

      <chakra.main>
        <Flex justify="center">
          {deck ? (
            <Text my={5}>
              Connected: {deck.device.device.device.productName}
            </Text>
          ) : (
            <Button onClick={load}>Connect</Button>
          )}
        </Flex>
        <SimpleGrid columns={cols} spacing={1} w="fit-content" m="auto">
          {Array.from({ length: rows }).map((_, ridx) => (
            Array.from({ length: cols }).map((_, cidx) => {
              const idx = ridx * cols + cidx
              const size = `min(${100 / cols}vw, ${70 / rows}vh)`
              return (
                <DeckButton
                  key={idx}
                  h={size} w={size}
                  index={idx}
                  {...{ deck }}
                />
              )
            })
          ))}
        </SimpleGrid>
      </chakra.main>

      <chakra.footer>
      </chakra.footer>
    </Box>
  )
}

export default Home
