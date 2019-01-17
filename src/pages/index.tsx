import { graphql } from 'gatsby'
import React from 'react'

import { Layout } from '../components'

export const IndexPage: React.FC = () => (
  <Layout>
    <p>Index Page</p>
    {/* react-photo-gallery with gatsby-image */}
    {/* Btw. use figure and figcaption */}
  </Layout>
)

export const INDEX_QUERY = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
