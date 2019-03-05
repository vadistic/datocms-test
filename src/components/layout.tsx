import { navigate } from 'gatsby'
import { Box, Button } from 'grommet'
import { Revert } from 'grommet-icons'
import React from 'react'
import { css, media, ThemeProps } from '../styles'
import { Footer } from './footer'
import { Navigation } from './navigation'

const layoutStyles = ({ theme: t }: ThemeProps) => css`

  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;

  overflow: hidden;

  main {
    margin: ${t.global.edgeSize.small};
    min-height: 100vh;
  }

  footer {
    padding: ${t.global.edgeSize.large} 0;
  }

  ${media.small(css`
    .navigation {
      position: fixed;
      padding: ${t.global.edgeSize.large} ${t.global.edgeSize.medium};
      width: ${t.global.spacingValue * 10}px;
    }

    main {
      margin: ${t.global.edgeSize.large};
      margin-bottom: 0;
    }
  `)}

  ${media.medium(css`
    main {
      margin-left: ${t.global.spacingValue * 10}px;
      margin-right: ${t.global.spacingValue * 4}px;
    }
  `)}

  ${media.large(css`
    .navigation {
      width: ${t.global.spacingValue * 12}px;
    }

    main {
      margin-top: ${t.global.edgeSize.large};

      margin-left: ${t.global.spacingValue * 12}px;
      margin-right: ${t.global.spacingValue * 8}px;
    }
  `)}

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
    <div css={layoutStyles}>
      <Navigation pageType={pageType} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
