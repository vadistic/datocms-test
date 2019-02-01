import { ThemeContext as GrommetContext } from 'grommet'
import { useContext } from 'react'
import { Theme, theme as defaultTheme } from '../styles'

export const useTheme = () => {
  const theme = useContext(GrommetContext)

  return (theme || defaultTheme) as Theme
}
