/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NavigationQuery
// ====================================================

export interface NavigationQuery_datoCmsAboutPage_photo_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface NavigationQuery_datoCmsAboutPage_photo {
  fluid: NavigationQuery_datoCmsAboutPage_photo_fluid | null;
}

export interface NavigationQuery_datoCmsAboutPage_bioNode_childMarkdownRemark {
  html: string | null;
}

export interface NavigationQuery_datoCmsAboutPage_bioNode {
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: NavigationQuery_datoCmsAboutPage_bioNode_childMarkdownRemark | null;
}

export interface NavigationQuery_datoCmsAboutPage {
  title: string | null;
  subtitle: string | null;
  photo: NavigationQuery_datoCmsAboutPage_photo | null;
  bioNode: NavigationQuery_datoCmsAboutPage_bioNode | null;
}

export interface NavigationQuery {
  datoCmsAboutPage: NavigationQuery_datoCmsAboutPage | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutPageQuery
// ====================================================

export interface AboutPageQuery_datoCmsAboutPage_seoMetaTags_tags_attributes {
  property: string | null;
  content: string | null;
  name: string | null;
}

export interface AboutPageQuery_datoCmsAboutPage_seoMetaTags_tags {
  tagName: string | null;
  content: string | null;
  attributes: AboutPageQuery_datoCmsAboutPage_seoMetaTags_tags_attributes | null;
}

export interface AboutPageQuery_datoCmsAboutPage_seoMetaTags {
  tags: (AboutPageQuery_datoCmsAboutPage_seoMetaTags_tags | null)[] | null;
}

export interface AboutPageQuery_datoCmsAboutPage_photo_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface AboutPageQuery_datoCmsAboutPage_photo {
  fluid: AboutPageQuery_datoCmsAboutPage_photo_fluid | null;
}

export interface AboutPageQuery_datoCmsAboutPage_bioNode_childMarkdownRemark {
  html: string | null;
  rawMarkdownBody: string | null;
}

export interface AboutPageQuery_datoCmsAboutPage_bioNode {
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: AboutPageQuery_datoCmsAboutPage_bioNode_childMarkdownRemark | null;
}

export interface AboutPageQuery_datoCmsAboutPage {
  seoMetaTags: AboutPageQuery_datoCmsAboutPage_seoMetaTags | null;
  title: string | null;
  subtitle: string | null;
  photo: AboutPageQuery_datoCmsAboutPage_photo | null;
  bioNode: AboutPageQuery_datoCmsAboutPage_bioNode | null;
}

export interface AboutPageQuery {
  datoCmsAboutPage: AboutPageQuery_datoCmsAboutPage | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_datoCmsHomePage_introTextNode_childMarkdownRemark {
  html: string | null;
}

export interface IndexPageQuery_datoCmsHomePage_introTextNode {
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: IndexPageQuery_datoCmsHomePage_introTextNode_childMarkdownRemark | null;
}

export interface IndexPageQuery_datoCmsHomePage {
  introTextNode: IndexPageQuery_datoCmsHomePage_introTextNode | null;
  copyright: string | null;
}

export interface IndexPageQuery_allDatoCmsWork_edges_node_coverImage_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface IndexPageQuery_allDatoCmsWork_edges_node_coverImage {
  fluid: IndexPageQuery_allDatoCmsWork_edges_node_coverImage_fluid | null;
}

export interface IndexPageQuery_allDatoCmsWork_edges_node {
  title: string | null;
  slug: string | null;
  excerpt: string | null;
  coverImage: IndexPageQuery_allDatoCmsWork_edges_node_coverImage | null;
}

export interface IndexPageQuery_allDatoCmsWork_edges {
  /**
   * The item at the end of the edge
   */
  node: IndexPageQuery_allDatoCmsWork_edges_node | null;
}

export interface IndexPageQuery_allDatoCmsWork {
  /**
   * A list of edges.
   */
  edges: (IndexPageQuery_allDatoCmsWork_edges | null)[] | null;
}

export interface IndexPageQuery {
  datoCmsHomePage: IndexPageQuery_datoCmsHomePage | null;
  /**
   * Connection to all DatoCmsWork nodes
   */
  allDatoCmsWork: IndexPageQuery_allDatoCmsWork | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WorkQuery
// ====================================================

export interface WorkQuery_datoCmsWork_seoMetaTags_tags_attributes {
  property: string | null;
  content: string | null;
  name: string | null;
}

export interface WorkQuery_datoCmsWork_seoMetaTags_tags {
  tagName: string | null;
  content: string | null;
  attributes: WorkQuery_datoCmsWork_seoMetaTags_tags_attributes | null;
}

export interface WorkQuery_datoCmsWork_seoMetaTags {
  tags: (WorkQuery_datoCmsWork_seoMetaTags_tags | null)[] | null;
}

export interface WorkQuery_datoCmsWork_descriptionNode_childMarkdownRemark {
  html: string | null;
}

export interface WorkQuery_datoCmsWork_descriptionNode {
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: WorkQuery_datoCmsWork_descriptionNode_childMarkdownRemark | null;
}

export interface WorkQuery_datoCmsWork_coverImage_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface WorkQuery_datoCmsWork_coverImage {
  url: string | null;
  fluid: WorkQuery_datoCmsWork_coverImage_fluid | null;
}

export interface WorkQuery_datoCmsWork {
  seoMetaTags: WorkQuery_datoCmsWork_seoMetaTags | null;
  title: string | null;
  excerpt: string | null;
  descriptionNode: WorkQuery_datoCmsWork_descriptionNode | null;
  coverImage: WorkQuery_datoCmsWork_coverImage | null;
}

export interface WorkQuery {
  datoCmsWork: WorkQuery_datoCmsWork | null;
}

export interface WorkQueryVariables {
  slug: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsSeoMetaTagsFragment
// ====================================================

export interface GatsbyDatoCmsSeoMetaTagsFragment_tags_attributes {
  property: string | null;
  content: string | null;
  name: string | null;
}

export interface GatsbyDatoCmsSeoMetaTagsFragment_tags {
  tagName: string | null;
  content: string | null;
  attributes: GatsbyDatoCmsSeoMetaTagsFragment_tags_attributes | null;
}

export interface GatsbyDatoCmsSeoMetaTagsFragment {
  tags: (GatsbyDatoCmsSeoMetaTagsFragment_tags | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsFaviconMetaTagsFragment
// ====================================================

export interface GatsbyDatoCmsFaviconMetaTagsFragment_tags_attributes {
  rel: string | null;
  sizes: string | null;
  href: string | null;
  name: string | null;
  content: string | null;
  type: string | null;
}

export interface GatsbyDatoCmsFaviconMetaTagsFragment_tags {
  tagName: string | null;
  attributes: GatsbyDatoCmsFaviconMetaTagsFragment_tags_attributes | null;
}

export interface GatsbyDatoCmsFaviconMetaTagsFragment {
  tags: (GatsbyDatoCmsFaviconMetaTagsFragment_tags | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsResolutionsFragment
// ====================================================

export interface GatsbyDatoCmsResolutionsFragment {
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsResolutionsFragment_noBase64
// ====================================================

export interface GatsbyDatoCmsResolutionsFragment_noBase64 {
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsSizesFragment
// ====================================================

export interface GatsbyDatoCmsSizesFragment {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsSizesFragment_noBase64
// ====================================================

export interface GatsbyDatoCmsSizesFragment_noBase64 {
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsFixedFragment
// ====================================================

export interface GatsbyDatoCmsFixedFragment {
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsFixedFragment_noBase64
// ====================================================

export interface GatsbyDatoCmsFixedFragment_noBase64 {
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsFluidFragment
// ====================================================

export interface GatsbyDatoCmsFluidFragment {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsFluidFragment_noBase64
// ====================================================

export interface GatsbyDatoCmsFluidFragment_noBase64 {
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
