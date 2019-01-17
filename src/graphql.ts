import { graphql } from 'gatsby'

/*
 * Included to validate typings generation from schema
 */

// https://github.com/datocms/gatsby-source-datocms/blob/master/src/seoFragments.js
export const datoCmsSeoMetaTags = graphql`
  fragment GatsbyDatoCmsSeoMetaTags on DatoCmsSeoMetaTags {
    tags {
      tagName
      content
      attributes {
        property
        content
        name
      }
    }
  }
`

// https://github.com/datocms/gatsby-source-datocms/blob/master/src/faviconFragments.js
export const datoCmsFaviconMetaTags = graphql`
  fragment GatsbyDatoCmsFaviconMetaTags on DatoCmsFaviconMetaTags {
    tags {
      tagName
      attributes {
        rel
        sizes
        href
        name
        content
        type
      }
    }
  }
`
// https://github.com/datocms/gatsby-source-datocms/blob/master/src/assetFragments.js

export const datoCmsAssetResolutions = graphql`
  fragment GatsbyDatoCmsResolutions on DatoCmsFixed {
    base64
    width
    height
    src
    srcSet
  }
`

export const datoCmsAssetResolutionsNoBase64 = graphql`
  fragment GatsbyDatoCmsResolutions_noBase64 on DatoCmsFixed {
    width
    height
    src
    srcSet
  }
`

export const datoCmsAssetSizes = graphql`
  fragment GatsbyDatoCmsSizes on DatoCmsFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`

export const datoCmsAssetSizesNoBase64 = graphql`
  fragment GatsbyDatoCmsSizes_noBase64 on DatoCmsFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`

export const datoCmsAssetFixed = graphql`
  fragment GatsbyDatoCmsFixed on DatoCmsFixed {
    base64
    width
    height
    src
    srcSet
  }
`

export const datoCmsAssetFixedNoBase64 = graphql`
  fragment GatsbyDatoCmsFixed_noBase64 on DatoCmsFixed {
    width
    height
    src
    srcSet
  }
`

export const datoCmsAssetFluid = graphql`
  fragment GatsbyDatoCmsFluid on DatoCmsFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`

export const datoCmsAssetFluidNoBase64 = graphql`
  fragment GatsbyDatoCmsFluid_noBase64 on DatoCmsFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`
