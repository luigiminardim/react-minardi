import React, { DetailedHTMLProps } from 'react'
import styled from 'styled-components'

const Text = styled.span`
  background: transparent;
  border: 0px #000000 solid;
  border-radius: 0px;
  bottom: auto;
  box-sizing: border-box;
  color: inherit;
  cursor: text;
  direction: inherit;
  display: inline;
  font: inherit;
  left: 0px;
  letter-spacing: inherit;
  list-style: none inside none;
  margin: 0;
  max-height: none;
  max-width: none;
  min-height: 0px;
  min-width: 0px;
  object-fit: scale-down;
  object-position: 50% 50%;
  opacity: 1;
  order: 0;
  outline: 0px solid black;
  overflow: hidden;
  padding: 0px;
  position: relative;
  resize: none;
  right: auto;
  scroll-behavior: smooth;
  tab-size: inherit;
  table-layout: inherit;
  text-align: inherit;
  text-decoration: inherit;
  text-indent: inherit;
  text-justify: inherit;
  text-overflow: ellipsis;
  text-shadow: inherit;
  text-transform: inherit;
  top: 0;
  transform: none;
  user-select: inherit;
  vertical-align: inherit;
  visibility: inherit;
  white-space: inherit;
  width: auto;
  word-break: inherit;
  word-spacing: inherit;
  word-wrap: inherit;
  writing-mode: inherit;
  z-index: 0;
`
export default Text

export function H1(props: unknown): JSX.Element {
  return <Text as="h1" {...props} />
}

export function H2(props: unknown): JSX.Element {
  return <Text as="h2" {...props} />
}

export function H3(props: unknown): JSX.Element {
  return <Text as="h3" {...props} />
}

export function H4(props: unknown): JSX.Element {
  return <Text as="h4" {...props} />
}

export function H5(props: unknown): JSX.Element {
  return <Text as="h5" {...props} />
}

export function H6(props: unknown): JSX.Element {
  return <Text as="h6" {...props} />
}
