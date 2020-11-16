import React from 'react'
import { AppProps } from 'next/app'
import ThemeSelector from '../concrete-components/ThemeSelector'
import { lightTheme } from '../concrete-components/ThemeSelector/themes'
import './../concrete-components/typography/fonts.css'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const AppContainerStyles = createGlobalStyle`
body, body>div {
    margin: 0;
    box-sizing: border-box; overflow: hidden;
    width: 100vw; height: 100vh;
    padding: 0;
    display: flex; flex-flow: column nowrap;
    align-items: stretch; justify-content: flex-start; justify-items: stretch;
  }
`

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeSelector defaultTheme={lightTheme}>
    <AppContainerStyles />
    <Head>
      <title>App title</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
    </Head>
    <Component {...pageProps} />
  </ThemeSelector>
)

export default App
