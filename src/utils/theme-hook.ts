import { useContext } from 'react'
import { Theme, theme as defaultTheme } from '../styles'

// TODO: change to named when they fix export
import * as grommet from 'grommet'

export const useTheme = () => {
  const theme = useContext(grommet.ThemeContext)

  return (theme || defaultTheme) as Theme
}
