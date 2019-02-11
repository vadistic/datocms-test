import { useContext } from 'react'
import { css, ResponsiveContext, ResponsiveValue, theme } from '../styles'

const mediaTemplate = (breakpoint: ResponsiveValue) => (styles: ReturnType<typeof css>) => css`
  @media (min-width: ${theme.global.breakpoints[breakpoint].value}px) {
    ${styles}
  }
`

export type Media = { [K in ResponsiveValue]: ReturnType<typeof mediaTemplate> }

export const media = (Object.keys(theme.global.breakpoints) as ResponsiveValue[]).reduce(
  (acc, label) => ({ ...acc, [label]: mediaTemplate(label) }),
  {} as Media,
)

export interface UseMedia {
  min?: ResponsiveValue
  max?: ResponsiveValue
  only?: ResponsiveValue
}

export const useMedia = (query?: UseMedia) => {
  const currentBreakpoint = useContext(ResponsiveContext)
  const breakpoints = Object.keys(theme.global.breakpoints)

  const currentBpIndex = breakpoints.findIndex(val => val === currentBreakpoint)

  if (query) {
    if (query.only) {
      return query.only === currentBreakpoint
    }

    const targetBpIndex = breakpoints.findIndex(val => val === (query.min || query.max))

    if (query.min) {
      return currentBpIndex >= targetBpIndex
    }

    if (query.max) {
      return currentBpIndex <= targetBpIndex
    }
  }

  // for hook reuse in fn body
  return (_query: UseMedia) => useMedia(_query)
}
