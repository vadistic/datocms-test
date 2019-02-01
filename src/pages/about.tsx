import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import React from 'react'

import { Heading, Markdown, Paragraph } from 'grommet'
import { Layout } from '../components'
import { AboutPageQuery } from '../generated/graphql'
import { IdxData } from '../utils'

const AboutPage: React.FC<IdxData<AboutPageQuery>> = ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsAboutPage.seoMetaTags} />
    <Heading>{data.datoCmsAboutPage.title}</Heading>
    <Paragraph>{data.datoCmsAboutPage.subtitle}</Paragraph>
    <Img fluid={data.datoCmsAboutPage.photo.fluid} />
    <Markdown>
      {data.datoCmsAboutPage.bioNode.childMarkdownRemark.rawMarkdownBody}
    </Markdown>
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
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
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
