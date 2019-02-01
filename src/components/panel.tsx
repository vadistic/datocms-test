import { graphql, StaticQuery } from 'gatsby'
import { Box, Button, ButtonProps, Layer, Markdown, Paragraph } from 'grommet'
import { Close, Menu } from 'grommet-icons'
import React from 'react'
import { NavigationQuery } from '../generated/graphql'
import { css } from '../styles'
import { Idx, useTheme } from '../utils'

const navigationButtonstyles = css`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  transition: all 2s;
`

export interface PanelButtonProps {
  isOpen: boolean
}

export const PanelButton: React.FC<PanelButtonProps & ButtonProps> = ({
  isOpen,
  ...rest
}) => (
  <Button
    css={navigationButtonstyles}
    plain
    icon={isOpen ? <Close size="large" /> : <Menu size="large" />}
    {...rest}
  />
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

  const theme = useTheme()

  return (
    <>
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
            pad="large"
            justify="between"
          >
            {children}
            <Box>
              <StaticQuery<Idx<NavigationQuery>> query={NAVIGATION_QUERY}>
                {data =>
                  data && (
                    <>
                      <Markdown>
                        {
                          data.datoCmsHomePage.introTextNode.childMarkdownRemark
                            .rawMarkdownBody
                        }
                      </Markdown>
                      <Paragraph size="small">
                        {data.datoCmsHomePage.copyright}
                      </Paragraph>
                    </>
                  )
                }
              </StaticQuery>
            </Box>
          </Box>
        </Layer>
      )}
    </>
  )
}

const NAVIGATION_QUERY = graphql`
  query NavigationQuery {
    datoCmsHomePage {
      introTextNode {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      copyright
    }
  }
`
