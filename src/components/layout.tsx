import { Box, Grommet } from 'grommet'
import React, { Fragment, useState } from 'react'

import { createGlobalStyle } from '../styles/styled-components'
import { theme } from '../styles/theme'
import { Navigation, NavigationOpenButton } from './navigation'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif');
`

export const Layout: React.FC = ({ children }) => {
  const [isPanelOpen, setPanel] = useState(false)
  const closePanel = () => setPanel(false)
  return (
    <Fragment>
      <Grommet theme={theme}>
        <GlobalStyle />
        <NavigationOpenButton onClick={() => setPanel(true)} />
        <Navigation isPanelOpen={isPanelOpen} setPanel={setPanel} />
        <Box as="article" width="full" onClick={closePanel}>
          {children}
        </Box>
      </Grommet>
    </Fragment>
  )
}
