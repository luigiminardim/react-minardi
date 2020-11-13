import React from 'react'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'

const BodyStyler = createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
    width: 100vw;
    background: #fff;
    box-sizing: border-box;
  }

  body {
    border: green 1px solid;
  }

  body>#__next {
    border: red 1px solid;
  }
`

export const Home: React.FC = () => (
  <>
    <BodyStyler />
    <Head>
      <title>App title</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>Page content</h1>
    </main>
  </>
)

export default Home
