import { Paragraph, ParagraphProps } from 'grommet'
import { normalizeColor } from 'grommet/utils'
import { media } from '../styles'
import styled, { css } from '../styles/styled'

export const Blockquote = styled(Paragraph).attrs(() => ({
  size: 'large',
}))(({ theme }) => {
  const color = {
    light: theme.global.colors['dark-4'],
    dark: theme.global.colors['light-4'],
  }

  return css`
    padding-left: 0;

    color: ${normalizeColor(color, theme)};

    ${media.small(css`
      padding-left: ${theme.global.edgeSize.medium};
    `)};
  `
})
