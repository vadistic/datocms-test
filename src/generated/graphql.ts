/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NavigationQuery
// ====================================================

export interface NavigationQuery_datoCmsHomePage {
  __typename: "DatoCmsHomePage";
  introText: string | null;
  copyright: string | null;
}

export interface NavigationQuery {
  datoCmsHomePage: NavigationQuery_datoCmsHomePage | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutPageQuery
// ====================================================

export interface AboutPageQuery_datoCmsAboutPage_seoMetaTags_tags_attributes {
  __typename: "attributes_3";
  property: string | null;
  content: string | null;
  name: string | null;
}

export interface AboutPageQuery_datoCmsAboutPage_seoMetaTags_tags {
  __typename: "tags_3";
  tagName: string | null;
  content: string | null;
  attributes: AboutPageQuery_datoCmsAboutPage_seoMetaTags_tags_attributes | null;
}

export interface AboutPageQuery_datoCmsAboutPage_seoMetaTags {
  __typename: "DatoCmsSeoMetaTags";
  tags: (AboutPageQuery_datoCmsAboutPage_seoMetaTags_tags | null)[] | null;
}

export interface AboutPageQuery_datoCmsAboutPage_photo_fluid {
  __typename: "DatoCmsFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface AboutPageQuery_datoCmsAboutPage_photo {
  __typename: "DatoCmsAsset";
  fluid: AboutPageQuery_datoCmsAboutPage_photo_fluid | null;
}

export interface AboutPageQuery_datoCmsAboutPage_bioNode_childMarkdownRemark {
  __typename: "MarkdownRemark";
  html: string | null;
  rawMarkdownBody: string | null;
}

export interface AboutPageQuery_datoCmsAboutPage_bioNode {
  __typename: "DatoCmsAboutPageBioTextNode";
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: AboutPageQuery_datoCmsAboutPage_bioNode_childMarkdownRemark | null;
}

export interface AboutPageQuery_datoCmsAboutPage {
  __typename: "DatoCmsAboutPage";
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

export interface IndexPageQuery_allDatoCmsWork_edges_node_coverImage_fluid {
  __typename: "DatoCmsFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface IndexPageQuery_allDatoCmsWork_edges_node_coverImage {
  __typename: "DatoCmsAsset";
  fluid: IndexPageQuery_allDatoCmsWork_edges_node_coverImage_fluid | null;
}

export interface IndexPageQuery_allDatoCmsWork_edges_node {
  __typename: "DatoCmsWork";
  title: string | null;
  slug: string | null;
  tags: string | null;
  excerpt: string | null;
  description: string | null;
  updatedAt: any | null;
  coverImage: IndexPageQuery_allDatoCmsWork_edges_node_coverImage | null;
}

export interface IndexPageQuery_allDatoCmsWork_edges {
  __typename: "DatoCmsWorkEdge";
  /**
   * The item at the end of the edge
   */
  node: IndexPageQuery_allDatoCmsWork_edges_node | null;
}

export interface IndexPageQuery_allDatoCmsWork {
  __typename: "DatoCmsWorkConnection";
  /**
   * A list of edges.
   */
  edges: (IndexPageQuery_allDatoCmsWork_edges | null)[] | null;
}

export interface IndexPageQuery {
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
  __typename: "attributes_3";
  property: string | null;
  content: string | null;
  name: string | null;
}

export interface WorkQuery_datoCmsWork_seoMetaTags_tags {
  __typename: "tags_3";
  tagName: string | null;
  content: string | null;
  attributes: WorkQuery_datoCmsWork_seoMetaTags_tags_attributes | null;
}

export interface WorkQuery_datoCmsWork_seoMetaTags {
  __typename: "DatoCmsSeoMetaTags";
  tags: (WorkQuery_datoCmsWork_seoMetaTags_tags | null)[] | null;
}

export interface WorkQuery_datoCmsWork_descriptionNode_childMarkdownRemark {
  __typename: "MarkdownRemark";
  rawMarkdownBody: string | null;
}

export interface WorkQuery_datoCmsWork_descriptionNode {
  __typename: "DatoCmsWorkDescriptionTextNode";
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: WorkQuery_datoCmsWork_descriptionNode_childMarkdownRemark | null;
}

export interface WorkQuery_datoCmsWork_coverImage_fluid {
  __typename: "DatoCmsFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface WorkQuery_datoCmsWork_coverImage {
  __typename: "DatoCmsAsset";
  fluid: WorkQuery_datoCmsWork_coverImage_fluid | null;
}

export interface WorkQuery_datoCmsWork_gallery_fluid {
  __typename: "DatoCmsFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface WorkQuery_datoCmsWork_gallery {
  __typename: "DatoCmsAsset";
  fluid: WorkQuery_datoCmsWork_gallery_fluid | null;
}

export interface WorkQuery_datoCmsWork {
  __typename: "DatoCmsWork";
  seoMetaTags: WorkQuery_datoCmsWork_seoMetaTags | null;
  title: string | null;
  excerpt: string | null;
  descriptionNode: WorkQuery_datoCmsWork_descriptionNode | null;
  coverImage: WorkQuery_datoCmsWork_coverImage | null;
  gallery: (WorkQuery_datoCmsWork_gallery | null)[] | null;
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
// GraphQL fragment: GatsbyDatoCmsResolutions
// ====================================================

export interface GatsbyDatoCmsResolutions {
  __typename: "DatoCmsFixed";
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
  __typename: "DatoCmsFixed";
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
  __typename: "DatoCmsFluid";
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
  __typename: "DatoCmsFluid";
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
  __typename: "DatoCmsFixed";
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
  __typename: "DatoCmsFixed";
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
  __typename: "DatoCmsFluid";
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
  __typename: "DatoCmsFluid";
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsFaviconMetaTags
// ====================================================

export interface GatsbyDatoCmsFaviconMetaTags_tags_attributes {
  __typename: "attributes_4";
  rel: string | null;
  sizes: string | null;
  href: string | null;
  name: string | null;
  content: string | null;
  type: string | null;
}

export interface GatsbyDatoCmsFaviconMetaTags_tags {
  __typename: "tags_4";
  tagName: string | null;
  attributes: GatsbyDatoCmsFaviconMetaTags_tags_attributes | null;
}

export interface GatsbyDatoCmsFaviconMetaTags {
  __typename: "DatoCmsFaviconMetaTags";
  tags: (GatsbyDatoCmsFaviconMetaTags_tags | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyDatoCmsSeoMetaTags
// ====================================================

export interface GatsbyDatoCmsSeoMetaTags_tags_attributes {
  __typename: "attributes_3";
  property: string | null;
  content: string | null;
  name: string | null;
}

export interface GatsbyDatoCmsSeoMetaTags_tags {
  __typename: "tags_3";
  tagName: string | null;
  content: string | null;
  attributes: GatsbyDatoCmsSeoMetaTags_tags_attributes | null;
}

export interface GatsbyDatoCmsSeoMetaTags {
  __typename: "DatoCmsSeoMetaTags";
  tags: (GatsbyDatoCmsSeoMetaTags_tags | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
