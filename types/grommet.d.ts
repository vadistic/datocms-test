import { Button, ButtonProps } from 'grommet'
import React from 'react'

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

declare module 'grommet' {
  const Button: React.ComponentType<
    ButtonProps & Omit<JSX.IntrinsicElements['button'], 'color'>
  >
}

export * from 'grommet'
