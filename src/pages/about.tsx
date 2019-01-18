import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import React from 'react'

import { Layout } from '../components'
import { AboutPageQuery } from '../generated/graphql'
import { IdxData } from '../utils'

const AboutPage: React.FC<IdxData<AboutPageQuery>> = ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.about.seoMetaTags} />
    <article>
      <p>About Page</p>
      <h1>{data.about.title}</h1>
      <Img fluid={data.about.photo.fluid} />

      <p>{data.about.subtitle}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: data.about.bioNode.childMarkdownRemark.html,
        }}
      />
    </article>
  </Layout>
)

export const ABOUT_PAGE_QUERY = graphql`
  query AboutPageQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTagsFragment
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizesFragment
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default AboutPage
