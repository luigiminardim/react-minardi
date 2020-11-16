import React from 'react'
import { H1, BoldRed } from './../concrete-components/typography'
import Image from 'next/image'
import Page from '../abstract-components/Page'

export default function Home(): JSX.Element {
  return (
    <Page>
      <Image
        src="https://assets.instabuy.com.br/ib.item.image.small/s-cc44d8d53e5448da99ce5c1aaf67f237.jpg"
        alt="Google"
        width={500}
        height={500}
      />
      <H1>
        Page <BoldRed>content</BoldRed>
      </H1>
    </Page>
  )
}
