import React from 'react'

import { BoxProps, ButtonProps } from 'node_modules/grommet'

import { FlattenInterpolation, ThemedStyledProps } from 'styled-components'
import { Theme } from '../src/styles/theme'

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export interface SharedProps<P> {
  css?: FlattenInterpolation<ThemedStyledProps<P, Theme>>
}

export type OmittedIntristicPropNames = 'color' | 'values'

export type SharedAndIntristicProps<P, HtmlElementName> = P &
  SharedProps<P> &
  Omit<JSX.IntrinsicElements[HtmlElementName], OmittedIntristicPropNames>

export declare const Box: React.ComponentType<
  SharedAndIntristicProps<BoxProps, 'div'>
>

export declare const Button: React.ComponentType<
  SharedAndIntristicProps<ButtonProps, 'button'>
>

export * from 'node_modules/grommet'
