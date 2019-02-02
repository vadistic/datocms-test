import {
  AnchorProps,
  Button,
  ButtonProps,
  HeadingProps,
  ParagraphProps,
} from 'grommet'
import React from 'react'

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

declare module 'grommet' {
  const Button: React.ComponentType<
    ButtonProps & Omit<JSX.IntrinsicElements['button'], 'color'>
  >

  const Anchor: React.ComponentType<
    AnchorProps & Omit<JSX.IntrinsicElements['button'], 'color'>
  >

  const Heading: React.ComponentType<
    HeadingProps & Omit<JSX.IntrinsicElements['h1'], 'color'>
  >

  const Paragraph: React.ComponentType<
    ParagraphProps & Omit<JSX.IntrinsicElements['p'], 'color'>
  >
}

export * from 'grommet'
