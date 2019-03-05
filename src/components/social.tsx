import { graphql, StaticQuery } from 'gatsby'
import { Box } from 'grommet'
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

interface IconComponentProps {
  profileType: string
}

const IconComponent: React.FC<IconComponentProps & IconProps> = ({ profileType, ...rest }) => {
  switch (profileType) {
    case 'Instagram':
      return <Instagram {...rest} />
    case 'Github':
      return <Github {...rest} />
    case 'Twitter':
      return <Twitter {...rest} />
    case 'Facebook':
      return <Facebook {...rest} />
    case 'Linkedin':
      return <Linkedin {...rest} />
    case 'Mail':
      return <Mail {...rest} />
    case 'Link':
    default:
      return <Link {...rest} />
  }
}

export const Social: React.FC = () => (
  <Box direction="row" wrap margin={{ vertical: 'small' }}>
    <StaticQuery<Idx<SocialQuery>> query={SOCIAL_QUERY}>
      {data =>
        data.allDatoCmsSocialProfile.edges.map(edge => (
          <Box key={edge.node.id} pad="xsmall">
            <a href={edge.node.url} target="_blank">
              <IconComponent size="medium" profileType={edge.node.profileType} />
            </a>
          </Box>
        ))
      }
    </StaticQuery>
  </Box>
)

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
