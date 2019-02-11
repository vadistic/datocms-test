import { Grommet } from 'grommet'
import React from 'react'
import { css, media, theme, ThemeProps } from '../styles'
import { Footer } from './footer'
import { Navigation } from './navigation'

const layoutStyles = ({ theme: t }: ThemeProps) => css`

  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;

  .navigation {
    visibility: hidden;
    position: fixed;
    padding: ${theme.global.edgeSize.large} ${theme.global.edgeSize.medium};
  }

  main {
    margin: ${theme.global.edgeSize.small};
    min-height: 100vh;
  }

  footer {
    padding: ${theme.global.edgeSize.large} 0;
  }

  ${media.small(css`
    main {
      margin: ${theme.global.edgeSize.large};
      margin-bottom: 0;
    }
  `)}

  ${media.medium(css`
    .navigation {
      visibility: visible;
      width: ${theme.global.spacingValue * 10}px;
    }

    main {
      margin-left: ${theme.global.spacingValue * 10}px;
      margin-right: ${theme.global.spacingValue * 4}px;
    }
  `)}

  ${media.large(css`
    .navigation {
      width: ${theme.global.spacingValue * 12}px;
    }

    main {
      margin-top: ${theme.global.edgeSize.large};

      margin-left: ${theme.global.spacingValue * 12}px;
      margin-right: ${theme.global.spacingValue * 8}px;
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
    <Grommet theme={theme} full>
      <div css={layoutStyles}>
        <Navigation pageType={pageType} />
        <main>{children}</main>
        <Footer />
      </div>
    </Grommet>
  )
}
