import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import React from 'react'

import { Layout } from '../components'

export const Work: React.FC = ({ data }: any) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <div
        className="sheet__body"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
        }}
      />
      <div className="sheet__gallery">
        <Img fluid={data.datoCmsWork.coverImage.fluid} />
      </div>
    </article>
  </Layout>
)

export const WORK_QUERY = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
