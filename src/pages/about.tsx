import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import React from 'react'

import { Box, Heading, Markdown, Paragraph } from 'grommet'
import { Layout, PageType } from '../components'
import { AboutPageQuery } from '../generated/graphql'
import { IdxData } from '../utils'

const AboutPage: React.FC<IdxData<AboutPageQuery>> = ({ data }) => (
  <Layout pageType={PageType.About}>
    <HelmetDatoCms seo={data.datoCmsAboutPage.seoMetaTags} />
    <Heading size="large">{data.datoCmsAboutPage.title}</Heading>
    <Paragraph size="xlarge">{data.datoCmsAboutPage.subtitle}</Paragraph>
    <Box margin={{ vertical: 'large' }}>
      <Img fluid={data.datoCmsAboutPage.photo.fluid} />
    </Box>
    <Markdown>{data.datoCmsAboutPage.bioNode.childMarkdownRemark.rawMarkdownBody}</Markdown>
  </Layout>
)

export const ABOUT_PAGE_QUERY = graphql`
  query AboutPageQuery {
    datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      bioNode {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`

export default AboutPage
