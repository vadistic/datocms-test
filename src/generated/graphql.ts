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

export interface LayoutQuery_datoCmsHome_introTextNode_childMarkdownRemark {
  html: string | null;
}

export interface LayoutQuery_datoCmsHome_introTextNode {
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: LayoutQuery_datoCmsHome_introTextNode_childMarkdownRemark | null;
}

export interface LayoutQuery_datoCmsHome {
  seoMetaTags: LayoutQuery_datoCmsHome_seoMetaTags | null;
  introTextNode: LayoutQuery_datoCmsHome_introTextNode | null;
  copyright: string | null;
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
// GraphQL query operation: AboutQuery
// ====================================================

export interface AboutQuery_about_seoMetaTags_tags_attributes {
  property: string | null;
  content: string | null;
  name: string | null;
}

export interface AboutQuery_about_seoMetaTags_tags {
  tagName: string | null;
  content: string | null;
  attributes: AboutQuery_about_seoMetaTags_tags_attributes | null;
}

export interface AboutQuery_about_seoMetaTags {
  tags: (AboutQuery_about_seoMetaTags_tags | null)[] | null;
}

export interface AboutQuery_about_photo_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface AboutQuery_about_photo {
  fluid: AboutQuery_about_photo_fluid | null;
}

export interface AboutQuery_about_bioNode_childMarkdownRemark {
  html: string | null;
}

export interface AboutQuery_about_bioNode {
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: AboutQuery_about_bioNode_childMarkdownRemark | null;
}

export interface AboutQuery_about {
  seoMetaTags: AboutQuery_about_seoMetaTags | null;
  title: string | null;
  subtitle: string | null;
  photo: AboutQuery_about_photo | null;
  bioNode: AboutQuery_about_bioNode | null;
}

export interface AboutQuery {
  about: AboutQuery_about | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexQuery
// ====================================================

export interface IndexQuery_allDatoCmsWork_edges_node_coverImage_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface IndexQuery_allDatoCmsWork_edges_node_coverImage {
  fluid: IndexQuery_allDatoCmsWork_edges_node_coverImage_fluid | null;
}

export interface IndexQuery_allDatoCmsWork_edges_node {
  /**
   * The id of this node.
   */
  id: string;
  title: string | null;
  slug: string | null;
  excerpt: string | null;
  coverImage: IndexQuery_allDatoCmsWork_edges_node_coverImage | null;
}

export interface IndexQuery_allDatoCmsWork_edges {
  /**
   * The item at the end of the edge
   */
  node: IndexQuery_allDatoCmsWork_edges_node | null;
}

export interface IndexQuery_allDatoCmsWork {
  /**
   * A list of edges.
   */
  edges: (IndexQuery_allDatoCmsWork_edges | null)[] | null;
}

export interface IndexQuery {
  /**
   * Connection to all DatoCmsWork nodes
   */
  allDatoCmsWork: IndexQuery_allDatoCmsWork | null;
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
// GraphQL fragment: GatsbyDatoCmsSeoMetaTags
// ====================================================

export interface GatsbyDatoCmsSeoMetaTags_tags_attributes {
  property: string | null;
  content: string | null;
  name: string | null;
}

export interface GatsbyDatoCmsSeoMetaTags_tags {
  tagName: string | null;
  content: string | null;
  attributes: GatsbyDatoCmsSeoMetaTags_tags_attributes | null;
}

export interface GatsbyDatoCmsSeoMetaTags {
  tags: (GatsbyDatoCmsSeoMetaTags_tags | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsFaviconMetaTags
// ====================================================

export interface GatsbyDatoCmsFaviconMetaTags_tags_attributes {
  rel: string | null;
  sizes: string | null;
  href: string | null;
  name: string | null;
  content: string | null;
  type: string | null;
}

export interface GatsbyDatoCmsFaviconMetaTags_tags {
  tagName: string | null;
  attributes: GatsbyDatoCmsFaviconMetaTags_tags_attributes | null;
}

export interface GatsbyDatoCmsFaviconMetaTags {
  tags: (GatsbyDatoCmsFaviconMetaTags_tags | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsResolutions
// ====================================================

export interface GatsbyDatoCmsResolutions {
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsResolutions_noBase64
// ====================================================

export interface GatsbyDatoCmsResolutions_noBase64 {
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsSizes
// ====================================================

export interface GatsbyDatoCmsSizes {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsSizes_noBase64
// ====================================================

export interface GatsbyDatoCmsSizes_noBase64 {
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsFixed
// ====================================================

export interface GatsbyDatoCmsFixed {
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsFixed_noBase64
// ====================================================

export interface GatsbyDatoCmsFixed_noBase64 {
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsFluid
// ====================================================

export interface GatsbyDatoCmsFluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsFluid_noBase64
// ====================================================

export interface GatsbyDatoCmsFluid_noBase64 {
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
