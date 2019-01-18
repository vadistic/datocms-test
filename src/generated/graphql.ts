/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LayoutQuery
// ====================================================

export interface LayoutQuery_datoCmsSite_globalSeo {
  siteName: string | null;
}

export interface LayoutQuery_datoCmsSite_faviconMetaTags_tags_attributes {
  rel: string | null;
  sizes: string | null;
  href: string | null;
  name: string | null;
  content: string | null;
  type: string | null;
}

export interface LayoutQuery_datoCmsSite_faviconMetaTags_tags {
  tagName: string | null;
  attributes: LayoutQuery_datoCmsSite_faviconMetaTags_tags_attributes | null;
}

export interface LayoutQuery_datoCmsSite_faviconMetaTags {
  tags: (LayoutQuery_datoCmsSite_faviconMetaTags_tags | null)[] | null;
}

export interface LayoutQuery_datoCmsSite {
  globalSeo: LayoutQuery_datoCmsSite_globalSeo | null;
  faviconMetaTags: LayoutQuery_datoCmsSite_faviconMetaTags | null;
}

export interface LayoutQuery_datoCmsHome_seoMetaTags_tags_attributes {
  property: string | null;
  content: string | null;
  name: string | null;
}

export interface LayoutQuery_datoCmsHome_seoMetaTags_tags {
  tagName: string | null;
  content: string | null;
  attributes: LayoutQuery_datoCmsHome_seoMetaTags_tags_attributes | null;
}

export interface LayoutQuery_datoCmsHome_seoMetaTags {
  tags: (LayoutQuery_datoCmsHome_seoMetaTags_tags | null)[] | null;
}

export interface LayoutQuery_datoCmsHome {
  seoMetaTags: LayoutQuery_datoCmsHome_seoMetaTags | null;
}

export interface LayoutQuery_allDatoCmsSocialProfile_edges_node {
  profileType: string | null;
  url: string | null;
}

export interface LayoutQuery_allDatoCmsSocialProfile_edges {
  /**
   * The item at the end of the edge
   */
  node: LayoutQuery_allDatoCmsSocialProfile_edges_node | null;
}

export interface LayoutQuery_allDatoCmsSocialProfile {
  /**
   * A list of edges.
   */
  edges: (LayoutQuery_allDatoCmsSocialProfile_edges | null)[] | null;
}

export interface LayoutQuery {
  datoCmsSite: LayoutQuery_datoCmsSite | null;
  datoCmsHome: LayoutQuery_datoCmsHome | null;
  /**
   * Connection to all DatoCmsSocialProfile nodes
   */
  allDatoCmsSocialProfile: LayoutQuery_allDatoCmsSocialProfile | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutPageQuery
// ====================================================

export interface AboutPageQuery_about_seoMetaTags_tags_attributes {
  property: string | null;
  content: string | null;
  name: string | null;
}

export interface AboutPageQuery_about_seoMetaTags_tags {
  tagName: string | null;
  content: string | null;
  attributes: AboutPageQuery_about_seoMetaTags_tags_attributes | null;
}

export interface AboutPageQuery_about_seoMetaTags {
  tags: (AboutPageQuery_about_seoMetaTags_tags | null)[] | null;
}

export interface AboutPageQuery_about_photo_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface AboutPageQuery_about_photo {
  fluid: AboutPageQuery_about_photo_fluid | null;
}

export interface AboutPageQuery_about_bioNode_childMarkdownRemark {
  html: string | null;
}

export interface AboutPageQuery_about_bioNode {
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: AboutPageQuery_about_bioNode_childMarkdownRemark | null;
}

export interface AboutPageQuery_about {
  seoMetaTags: AboutPageQuery_about_seoMetaTags | null;
  title: string | null;
  subtitle: string | null;
  photo: AboutPageQuery_about_photo | null;
  bioNode: AboutPageQuery_about_bioNode | null;
}

export interface AboutPageQuery {
  about: AboutPageQuery_about | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_datoCmsHome_introTextNode_childMarkdownRemark {
  html: string | null;
}

export interface IndexPageQuery_datoCmsHome_introTextNode {
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: IndexPageQuery_datoCmsHome_introTextNode_childMarkdownRemark | null;
}

export interface IndexPageQuery_datoCmsHome {
  introTextNode: IndexPageQuery_datoCmsHome_introTextNode | null;
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
  /**
   * The id of this node.
   */
  id: string;
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
  datoCmsHome: IndexPageQuery_datoCmsHome | null;
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
