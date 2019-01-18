import { graphql, StaticQuery } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Grommet } from 'grommet'
import React, { Fragment } from 'react'

import { LayoutQuery } from '../generated/graphql'
import { theme } from '../styles/theme'
import { Idx } from '../utils'

export const Layout: React.FC = ({ children }) => (
  <StaticQuery<Idx<LayoutQuery>> query={LAYOUT_QUERY}>
    {data => (
      <Fragment>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />
        <Grommet theme={theme}>{children}</Grommet>
      </Fragment>
    )}
  </StaticQuery>
)

export const LAYOUT_QUERY = graphql`
  query LayoutQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTagsFragment
      }
    }
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTagsFragment
      }
    }
    allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          profileType
          url
        }
      }
    }
  }
`
