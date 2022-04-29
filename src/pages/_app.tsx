import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

import '@/styles/globals.css'

import { theme } from '../util'
import { createEmotionCache } from '../util'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}
export default function MyApp(props: MyAppProps) {
  const clientSideEmotionCache = createEmotionCache()

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  )
}
