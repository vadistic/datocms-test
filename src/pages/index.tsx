import { graphql } from 'gatsby'
import React from 'react'

import { Gallery, Layout } from '../components'
import { IndexPageQuery } from '../generated/graphql'
import { IdxData } from '../utils'

export const IndexPage: React.FC<IdxData<IndexPageQuery>> = ({ data }) => {
  return (
    <Layout>
      <article>
        <p>Index Page</p>
        <div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsHomePage.introTextNode.childMarkdownRemark.html,
          }}
        />
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
          html
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
