import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import React from 'react'

export const About: React.FC = ({ data: { about } }: any) => (
  <article className="sheet">
    <HelmetDatoCms seo={about.seoMetaTags} />
    <div className="sheet__inner">
      <h1 className="sheet__title">{about.title}</h1>
      <p className="sheet__lead">{about.subtitle}</p>
      <div className="sheet__gallery">
        <Img fluid={about.photo.fluid} />
      </div>
      <div
        className="sheet__body"
        dangerouslySetInnerHTML={{
          __html: about.bioNode.childMarkdownRemark.html,
        }}
      />
    </div>
  </article>
)

export const ABOUT_QUERY = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
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
        }
      }
    }
  }
`
