import { graphql } from 'gatsby'
import React from 'react'

import { Markdown } from 'grommet'
import { Gallery, Layout } from '../components'
import { IndexPageQuery } from '../generated/graphql'
import { IdxData } from '../utils'

export const IndexPage: React.FC<IdxData<IndexPageQuery>> = ({ data }) => {
  return (
    <Layout>
      <article>
        <code>Logo</code>
        <Markdown>
          {
            data.datoCmsHomePage.introTextNode.childMarkdownRemark
              .rawMarkdownBody
          }
        </Markdown>
        <Gallery items={data.allDatoCmsWork.edges} />
      </article>
    </Layout>
  )
}

export const INDEX_PAGE_QUERY = graphql`
  query IndexPageQuery {
    datoCmsHomePage {
      introTextNode {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      copyright
    }
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluidFragment
            }
          }
        }
      }
    }
  }
`

export default IndexPage
