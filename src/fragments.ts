import { graphql } from 'gatsby'

/*
 * Included to validate typings generation from schema
 * `-Fragment` added to name to avoid fragment duplciation
 */

// https://github.com/datocms/gatsby-source-datocms/blob/master/src/seoFragments.js
export const datoCmsSeoMetaTags = graphql`
  fragment GatsbyDatoCmsSeoMetaTagsFragment on DatoCmsSeoMetaTags {
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
  fragment GatsbyDatoCmsFaviconMetaTagsFragment on DatoCmsFaviconMetaTags {
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
  fragment GatsbyDatoCmsResolutionsFragment on DatoCmsFixed {
    base64
    width
    height
    src
    srcSet
  }
`

export const datoCmsAssetResolutionsNoBase64 = graphql`
  fragment GatsbyDatoCmsResolutionsFragment_noBase64 on DatoCmsFixed {
    width
    height
    src
    srcSet
  }
`

export const datoCmsAssetSizes = graphql`
  fragment GatsbyDatoCmsSizesFragment on DatoCmsFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`

export const datoCmsAssetSizesNoBase64 = graphql`
  fragment GatsbyDatoCmsSizesFragment_noBase64 on DatoCmsFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`

export const datoCmsAssetFixed = graphql`
  fragment GatsbyDatoCmsFixedFragment on DatoCmsFixed {
    base64
    width
    height
    src
    srcSet
  }
`

export const datoCmsAssetFixedNoBase64 = graphql`
  fragment GatsbyDatoCmsFixedFragment_noBase64 on DatoCmsFixed {
    width
    height
    src
    srcSet
  }
`

export const datoCmsAssetFluid = graphql`
  fragment GatsbyDatoCmsFluidFragment on DatoCmsFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`

export const datoCmsAssetFluidNoBase64 = graphql`
  fragment GatsbyDatoCmsFluidFragment_noBase64 on DatoCmsFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`
