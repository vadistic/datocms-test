import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Box, Heading, Markdown, Paragraph } from 'grommet'
import React from 'react'
import { Layout, Lightbox, PageType } from '../components'
import { WorkQuery } from '../generated/graphql'
import { IdxData } from '../utils'

const WorkTemplate: React.FC<IdxData<WorkQuery>> = ({ data }) => {
  return (
    <Layout pageType={PageType.Work}>
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <Lightbox
        cover={data.datoCmsWork.coverImage}
        gallery={data.datoCmsWork.gallery}
      />
      <Box as="article" margin={{ horizontal: 'large' }}>
        <Box margin={{ vertical: 'large' }}>
          <Heading size="large">{data.datoCmsWork.title}</Heading>
          <blockquote>
            <Paragraph size="xlarge">{data.datoCmsWork.excerpt}</Paragraph>
          </blockquote>
        </Box>
        <Box>
          <Markdown>
            {
              data.datoCmsWork.descriptionNode.childMarkdownRemark
                .rawMarkdownBody
            }
          </Markdown>
        </Box>
      </Box>
    </Layout>
  )
}

export const WORK_TEMPLATE_QUERY = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      descriptionNode {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      coverImage {
        fluid(
          maxWidth: 2000
          maxHeight: 2000
          imgixParams: { fm: "jpg", auto: "compress" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
      gallery {
        fluid(
          maxWidth: 2000
          maxHeight: 2000
          imgixParams: { fm: "jpg", auto: "compress" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default WorkTemplate
