import { CSSProp } from 'styled-components'
import { Theme } from '../src/styles'

declare module 'react' {
  interface Attributes {
    css?: CSSProp<Theme>
  }
}
