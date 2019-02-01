import { AnchorProps } from '@reach/router'
import { navigateTo } from 'gatsby'
import { Anchor, Box, Grommet } from 'grommet'
import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from '../styles/styled-components'
import { theme } from '../styles/theme'
import { Panel, PanelButton } from './panel'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif');
`

interface AnchorLinkProps {
  to: string
}

export const AnchorLink: React.FC<AnchorLinkProps & AnchorProps> = ({
  to,
  ...rest
}) => (
  <Anchor
    size="xxlarge"
    margin={{ vertical: 'small' }}
    onClick={() => {
      navigateTo(to)
    }}
    {...rest}
  />
)

export const Navigation: React.FC = () => (
  <Box as="nav" flex="grow" justify="center">
    <AnchorLink to="/">Home</AnchorLink>
    <AnchorLink to="/about">About</AnchorLink>
  </Box>
)

export const Layout: React.FC = ({ children }) => {
  const [isPanelOpen, setPanel] = useState(false)
  const closePanel = () => setPanel(false)
  return (
    <>
      {/* Grommet acts as styled-components theme provider! */}
      <Grommet theme={theme}>
        <GlobalStyle />
        <PanelButton
          onClick={() => setPanel(isOpen => !isOpen)}
          isOpen={isPanelOpen}
        />
        <Panel isPanelOpen={isPanelOpen} setPanel={setPanel}>
          <Navigation />
        </Panel>
        <Box as="article" width="full" onClick={closePanel}>
          {children}
        </Box>
      </Grommet>
    </>
  )
}
