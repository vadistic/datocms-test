import { graphql } from 'gatsby'
import React, { useRef } from 'react'

import { Markdown } from 'grommet'
import { Gallery, Layout } from '../components'
import { IndexPageQuery } from '../generated/graphql'
import { IdxData, useSize, useTheme } from '../utils'

export const IndexPage: React.FC<IdxData<IndexPageQuery>> = ({ data }) => {
  const { width, height, ref } = useSize()

  return (
    <Layout>
      <article ref={ref}>
        <code>Logo</code>
        <p>
          size: {width} x {height}
        </p>
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
          description
          updatedAt
          coverImage {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
