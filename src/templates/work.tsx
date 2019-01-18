import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import React from 'react'

import { Layout } from '../components'
import { WorkQuery } from '../generated/graphql'
import { IdxData } from '../utils'

export const Work: React.FC<IdxData<WorkQuery>> = ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <div
        dangerouslySetInnerHTML={{
          __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
        }}
      />
      <div>
        <Img fluid={data.datoCmsWork.coverImage.fluid} />
      </div>
    </article>
  </Layout>
)

export const WORK_QUERY = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTagsFragment
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
          ...GatsbyDatoCmsFluidFragment
        }
      }
    }
  }
`
