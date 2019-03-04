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

  overflow: hidden;

  .navigation {
    visibility: hidden;
    position: fixed;
    padding: ${t.global.edgeSize.large} ${t.global.edgeSize.medium};
  }

  main {
    margin: ${t.global.edgeSize.small};
    min-height: 100vh;
  }

  footer {
    padding: ${t.global.edgeSize.large} 0;
  }

  ${media.small(css`
    main {
      margin: ${t.global.edgeSize.large};
      margin-bottom: 0;
    }
  `)}

  ${media.medium(css`
    .navigation {
      visibility: visible;
      width: ${t.global.spacingValue * 10}px;
    }

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
    <Grommet theme={theme} full>
      <div css={layoutStyles}>
        <Navigation pageType={pageType} />
        <main>{children}</main>
        <Footer />
      </div>
    </Grommet>
  )
}
