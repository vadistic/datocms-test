import { Grommet } from 'grommet'
import React, { Fragment } from 'react'

import { theme } from '../styles/theme'

export const Layout: React.FC = ({ children }) => (
  <Fragment>
    <Grommet theme={theme}>{children}</Grommet>
  </Fragment>
)
