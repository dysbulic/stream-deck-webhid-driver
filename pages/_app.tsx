import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

const AppRoot = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Head>
      <title>Stream Deck Testing</title>
      <meta name="description" content="Stream Deck Video Review Interface"/>
      <link rel="icon" href="/kitten.png"/>
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default AppRoot
