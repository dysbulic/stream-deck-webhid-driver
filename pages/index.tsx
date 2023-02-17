import type { NextPage } from 'next'
import {
  requestStreamDecks, getStreamDecks, StreamDeckWeb
} from '@elgato-stream-deck/webhid'
import dynamic from 'next/dynamic'
import { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react'
import { chakra, Box, Heading, Text, SimpleGrid, Flex, Button } from '@chakra-ui/react'
import { IEmojiData as EmojiData } from 'emoji-picker-react'
import { DeckImageButton } from '../components/DeckImageButton'
import type { Maybe } from '../types'
import { DeckTimeButton } from '../components/DeckTimeButton'

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

type ButtonState = {
  img: ReactNode
  time: ReactNode
  type: 'img' | 'time' //| 'countdown'
  lastRelease: number
}

const ROWS = 3
const COLS = 5

const Home: NextPage = () => {
  const [deck, setDeck] = useState<Maybe<StreamDeckWeb>>(null)
  const [rows, setRows] = useState(ROWS)
  const [cols, setCols] = useState(COLS)
  const [buttons, setButtons] = useState<Array<ButtonState>>([])

  const load = useCallback(async () => {
    let [deck] = await getStreamDecks()
    if(!deck) {
      [deck] = await requestStreamDecks()
    }
    if(!deck) {
      console.error('Couldn’t get a Stream Deck')
    } else {
      setDeck(deck)
      const { KEY_ROWS: rows, KEY_COLUMNS: cols } = deck
      setRows(rows)
      setCols(cols)
      setButtons(
        Array.from(
          { length: rows * cols },
          (_, idx) => {
            const size = `min(${100 / cols}vw, ${70 / rows}vh)`
            return {
              lastRelease: 0,
              type: 'img',
              img: (
                <DeckImageButton
                  key={idx}
                  h={size} w={size}
                  index={idx}
                  {...{ deck }}
                />
              ),
              time: (
                <DeckTimeButton
                  key={idx}
                  h={size} w={size}
                  index={idx}
                  {...{ deck }}
                />
              )
            }
          },
        )
      )
    }
  }, [])

  useEffect(() => {
    const down = (idx: number) => {
      const now = Date.now()
      const button = {...buttons[idx]}
      const delta = now - button.lastRelease
      if(delta < 1 * 1000) {
        button.type = button.type === 'img' ? 'time' : 'img'
      }
      setButtons((bs) => [
        ...bs.slice(0, idx), button, ...bs.slice(idx + 1)
      ])
    }

    const up = (idx: number) => {
      buttons[idx].lastRelease = Date.now()
    }

    deck?.on('down', down)
    deck?.on('up', up)

    return () => {
      deck?.off('down', down)
      deck?.off('up', up)
    }
  }, [buttons, deck])

  return (
    <Box>
      <chakra.header>
        <Heading textAlign="center">Stream Deck Testing</Heading>
      </chakra.header>

      <chakra.main>
        <Flex justify="center">
          {deck ? (
            <Text my={5}>
              Connected: {deck.PRODUCT_NAME}
            </Text>
          ) : (
            <Button my={5} onClick={load}>Connect</Button>
          )}
        </Flex>
        <SimpleGrid columns={cols} spacing={1} w="fit-content" m="auto">
          {buttons.map((b) => b[b.type])}
        </SimpleGrid>
      </chakra.main>

      <chakra.footer>
      </chakra.footer>
    </Box>
  )
}

export default Home
