import { graphql, Link } from 'gatsby'
import { Box, Button, ButtonProps, Layer } from 'grommet'
import { Close, Menu } from 'grommet-icons'
import React, { Fragment } from 'react'

import { css } from '../styles/styled-components'

const navigationButtonstyles = css`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
`

export const NavigationOpenButton: React.FC<ButtonProps> = props => (
  <Button
    css={navigationButtonstyles}
    plain
    icon={<Menu size="large" />}
    {...props}
  />
)

export const NavigationCloseButton: React.FC<ButtonProps> = props => (
  <Button plain color="Close" icon={<Close size="large" />} {...props} />
)

export interface PanelProps {
  isPanelOpen: boolean
  setPanel: React.Dispatch<React.SetStateAction<boolean>>
}

export const Panel: React.FC<PanelProps> = ({
  children,
  isPanelOpen,
  setPanel,
}) => {
  const closePanel = () => setPanel(false)
  return (
    <Fragment>
      {isPanelOpen && (
        <Layer
          position="right"
          full="vertical"
          animate
          plain
          modal={false}
          responsive={false}
          onEsc={closePanel}
        >
          <Box
            height="full"
            width="large"
            elevation="medium"
            background={{ color: 'background' }}
          >
            <NavigationCloseButton onClick={closePanel} alignSelf="end" />
            {children}
          </Box>
        </Layer>
      )}
    </Fragment>
  )
}

export interface NavigationProps extends PanelProps {}

export const Navigation: React.FC<NavigationProps> = props => (
  <Panel {...props}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Panel>
)

export const NAVIGATION_QUERY = graphql`
  query NavigationQuery {
    datoCmsAboutPage {
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizesFragment
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
