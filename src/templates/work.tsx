import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import React from 'react'

import { Markdown } from 'grommet'
import { Layout } from '../components'
import { WorkQuery } from '../generated/graphql'
import { IdxData } from '../utils'

const WorkTemplate: React.FC<IdxData<WorkQuery>> = ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <Markdown>
        {data.datoCmsWork.descriptionNode.childMarkdownRemark.rawMarkdownBody}
      </Markdown>

      <div>
        <Img fluid={data.datoCmsWork.coverImage.fluid} />
      </div>
    </article>
  </Layout>
)

export const WORK_TEMPLATE_QUERY = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTagsFragment
      }
      title
      excerpt
      descriptionNode {
        childMarkdownRemark {
          rawMarkdownBody

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

export default WorkTemplate
