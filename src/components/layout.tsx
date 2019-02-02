import { Grommet } from 'grommet'
import React from 'react'
import { createGlobalStyle, css, theme, ThemeProps } from '../styles'
import { Navigation } from './navigation'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif');
`
const layoutStyles = ({ theme: t }: ThemeProps) => css`
  display: flex;
  flex-direction: column;
  position: relative;

  main {
    margin-top: ${theme.global.edgeSize.large};

    margin-left: ${theme.global.spacingValue * 12}px;
    margin-right: ${theme.global.spacingValue * 8}px;
  }

  .navigation {
    position: fixed;
    width: ${theme.global.spacingValue * 12}px;
  }

  @media (max-width: ${t.global.breakpoints.large.value}px) {
    main {
      margin-left: ${theme.global.spacingValue * 10}px;
      margin-right: ${theme.global.spacingValue * 4}px;
    }

    .navigation {
      width: ${theme.global.spacingValue * 10}px;
    }
  }

  @media (max-width: ${t.global.breakpoints.medium.value}px) {
    main {
      margin-right: ${theme.global.edgeSize.large};
    }
  }

  @media (max-width: ${t.global.breakpoints.small.value}px) {
    main {
      margin: ${theme.global.edgeSize.small};
    }
  }
`

export enum PageType {
  Home,
  About,
  Work,
}

export interface LayoutProps {
  pageType: PageType
}

export const Layout: React.FC<LayoutProps> = ({ children, pageType }) => {
  return (
    <>
      {/* Grommet acts as styled-components theme provider! */}
      <Grommet theme={theme} full>
        <GlobalStyle />
        <div css={layoutStyles}>
          <Navigation pageType={pageType} />
          <main>{children}</main>
        </div>
      </Grommet>
    </>
  )
}
