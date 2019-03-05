import { graphql, StaticQuery } from 'gatsby'
import { Box, BoxProps } from 'grommet'
import {
  Facebook,
  Github,
  IconProps,
  Instagram,
  Link,
  Linkedin,
  Mail,
  Twitter,
} from 'grommet-icons'
import React from 'react'
import { SocialQuery } from '../generated/graphql'
import { Idx } from '../utils'

export interface SocialProps {
  iconProps?: IconProps
  iconWrapperProsp?: BoxProps
}

export const Social: React.FC<SocialProps> = ({ iconProps = {}, iconWrapperProsp = {} }) => {
  const Icon = {
    Instagram,
    Github,
    Twitter,
    Facebook,
    Linkedin,
    Mail,
    Link,
  }

  const renderIcon = (iconName: keyof typeof Icon) => {
    const Tag = Icon[iconName] || Icon.Link
    return <Tag size="medium" {...iconProps} />
  }

  return (
    <Box direction="row">
      <StaticQuery<Idx<SocialQuery>> query={SOCIAL_QUERY}>
        {data =>
          data.allDatoCmsSocialProfile.edges.map(edge => (
            <Box key={edge.node.id} pad="xsmall" {...iconWrapperProsp}>
              <a href={edge.node.url} target="_blank">
                {renderIcon(edge.node.profileType as any)}
              </a>
            </Box>
          ))
        }
      </StaticQuery>
    </Box>
  )
}
const SOCIAL_QUERY = graphql`
  query SocialQuery {
    allDatoCmsSocialProfile {
      edges {
        node {
          id
          profileType
          url
        }
      }
    }
  }
`
