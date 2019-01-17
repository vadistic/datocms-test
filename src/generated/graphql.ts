export type Maybe<T> = T | null;


export interface SitePageConnectionSort {
  
  fields: (Maybe<SitePageConnectionSortByFieldsEnum>)[];
  
  order?: SitePageConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterSitePage {
  
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>;
  
  internalComponentName?: Maybe<SitePageConnectionInternalComponentNameQueryString>;
  
  path?: Maybe<SitePageConnectionPathQueryString_2>;
  
  component?: Maybe<SitePageConnectionComponentQueryString>;
  
  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>;
  
  context?: Maybe<SitePageConnectionContextInputObject>;
  
  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>;
  
  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>;
  
  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>;
  
  id?: Maybe<SitePageConnectionIdQueryString_2>;
  
  internal?: Maybe<SitePageConnectionInternalInputObject_2>;
}

export interface SitePageConnectionJsonNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalComponentNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPathQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentChunkNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextInputObject {
  
  slug?: Maybe<SitePageConnectionContextSlugQueryString>;
}

export interface SitePageConnectionContextSlugQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInputObject {
  
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>;
  
  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>;
  
  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>;
  
  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>;
  
  pluginOptions?: Maybe<SitePageConnectionPluginCreatorPluginOptionsInputObject>;
  
  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>;
  
  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>;
  
  pluginFilepath?: Maybe<SitePageConnectionPluginCreatorPluginFilepathQueryString>;
  
  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>;
  
  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>;
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  
  apiToken?: Maybe<SitePageConnectionPluginCreatorPluginOptionsApiTokenQueryString>;
  
  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>;
  
  pathCheck?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsApiTokenQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>;
  
  description?: Maybe<SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString>;
  
  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>;
  
  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>;
  
  author?: Maybe<SitePageConnectionPluginCreatorPackageJsonAuthorQueryString>;
  
  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>;
  
  dependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList>;
  
  devDependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList>;
  
  peerDependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList>;
  
  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>;
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString>;
  
  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString>;
  
  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString>;
  
  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  
  contentDigest?: Maybe<SitePageConnectionPluginCreatorInternalContentDigestQueryString>;
  
  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>;
  
  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>;
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentPathQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalInputObject_2 {
  
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>;
  
  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>;
  
  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>;
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalDescriptionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionSort {
  
  fields: (Maybe<SitePluginConnectionSortByFieldsEnum>)[];
  
  order?: SitePluginConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>;
  
  id?: Maybe<SitePluginConnectionIdQueryString_2>;
  
  name?: Maybe<SitePluginConnectionNameQueryString_2>;
  
  version?: Maybe<SitePluginConnectionVersionQueryString_2>;
  
  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>;
  
  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>;
  
  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>;
  
  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>;
  
  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>;
  
  internal?: Maybe<SitePluginConnectionInternalInputObject_2>;
}

export interface SitePluginConnectionResolveQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionVersionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  
  apiToken?: Maybe<SitePluginConnectionPluginOptionsApiTokenQueryString_2>;
  
  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>;
  
  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>;
}

export interface SitePluginConnectionPluginOptionsApiTokenQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>;
  
  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>;
  
  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>;
  
  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>;
  
  author?: Maybe<SitePluginConnectionPackageJsonAuthorQueryString_2>;
  
  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>;
  
  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>;
  
  devDependencies?: Maybe<SitePluginConnectionPackageJsonDevDependenciesQueryList_2>;
  
  peerDependencies?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesQueryList_2>;
  
  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>;
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>;
  
  version?: Maybe<SitePluginConnectionPackageJsonDependenciesVersionQueryString_2>;
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDevDependenciesInputObject_2>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>;
  
  version?: Maybe<SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  
  elemMatch?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesInputObject_2>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  
  name?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2>;
  
  version?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalInputObject_2 {
  
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>;
  
  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>;
  
  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>;
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionSort {
  
  fields: (Maybe<DatoCmsFieldConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsFieldConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsField {
  
  id?: Maybe<DatoCmsFieldConnectionIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsFieldConnectionOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsFieldConnectionInternalInputObject_2>;
  
  label?: Maybe<DatoCmsFieldConnectionLabelQueryString_2>;
  
  fieldType?: Maybe<DatoCmsFieldConnectionFieldTypeQueryString_2>;
  
  apiKey?: Maybe<DatoCmsFieldConnectionApiKeyQueryString_2>;
  
  localized?: Maybe<DatoCmsFieldConnectionLocalizedQueryBoolean_2>;
  
  validators?: Maybe<DatoCmsFieldConnectionValidatorsInputObject_2>;
  
  position?: Maybe<DatoCmsFieldConnectionPositionQueryInteger_2>;
  
  appeareance?: Maybe<DatoCmsFieldConnectionAppeareanceInputObject_2>;
}

export interface DatoCmsFieldConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsFieldConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsFieldConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsFieldConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsFieldConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionLabelQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionFieldTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionLocalizedQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsFieldConnectionValidatorsInputObject_2 {
  
  enum?: Maybe<DatoCmsFieldConnectionValidatorsEnumInputObject_2>;
  
  slugTitleField?: Maybe<DatoCmsFieldConnectionValidatorsSlugTitleFieldInputObject_2>;
  
  extension?: Maybe<DatoCmsFieldConnectionValidatorsExtensionInputObject_2>;
}

export interface DatoCmsFieldConnectionValidatorsEnumInputObject_2 {
  
  values?: Maybe<DatoCmsFieldConnectionValidatorsEnumValuesQueryList_2>;
}

export interface DatoCmsFieldConnectionValidatorsEnumValuesQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionValidatorsSlugTitleFieldInputObject_2 {
  
  titleFieldId?: Maybe<DatoCmsFieldConnectionValidatorsSlugTitleFieldTitleFieldIdQueryString_2>;
}

export interface DatoCmsFieldConnectionValidatorsSlugTitleFieldTitleFieldIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionValidatorsExtensionInputObject_2 {
  
  predefinedList?: Maybe<DatoCmsFieldConnectionValidatorsExtensionPredefinedListQueryString_2>;
}

export interface DatoCmsFieldConnectionValidatorsExtensionPredefinedListQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionPositionQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsFieldConnectionAppeareanceInputObject_2 {
  
  editor?: Maybe<DatoCmsFieldConnectionAppeareanceEditorQueryString_2>;
  
  parameters?: Maybe<DatoCmsFieldConnectionAppeareanceParametersInputObject_2>;
  
  type?: Maybe<DatoCmsFieldConnectionAppeareanceTypeQueryString_2>;
}

export interface DatoCmsFieldConnectionAppeareanceEditorQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionAppeareanceParametersInputObject_2 {
  
  toolbar?: Maybe<DatoCmsFieldConnectionAppeareanceParametersToolbarQueryList_2>;
  
  heading?: Maybe<DatoCmsFieldConnectionAppeareanceParametersHeadingQueryBoolean_2>;
}

export interface DatoCmsFieldConnectionAppeareanceParametersToolbarQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldConnectionAppeareanceParametersHeadingQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsFieldConnectionAppeareanceTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionSort {
  
  fields: (Maybe<DatoCmsModelConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsModelConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsModel {
  
  id?: Maybe<DatoCmsModelConnectionIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsModelConnectionOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsModelConnectionInternalInputObject_2>;
  
  name?: Maybe<DatoCmsModelConnectionNameQueryString_2>;
  
  singleton?: Maybe<DatoCmsModelConnectionSingletonQueryBoolean_2>;
  
  sortable?: Maybe<DatoCmsModelConnectionSortableQueryBoolean_2>;
  
  apiKey?: Maybe<DatoCmsModelConnectionApiKeyQueryString_2>;
  
  tree?: Maybe<DatoCmsModelConnectionTreeQueryBoolean_2>;
  
  modularBlock?: Maybe<DatoCmsModelConnectionModularBlockQueryBoolean_2>;
  
  draftModeActive?: Maybe<DatoCmsModelConnectionDraftModeActiveQueryBoolean_2>;
  
  allLocalesRequired?: Maybe<DatoCmsModelConnectionAllLocalesRequiredQueryBoolean_2>;
  
  collectionAppeareance?: Maybe<DatoCmsModelConnectionCollectionAppeareanceQueryString_2>;
  
  hasSingletonItem?: Maybe<DatoCmsModelConnectionHasSingletonItemQueryBoolean_2>;
  
  fields?: Maybe<DatoCmsModelConnectionFieldsQueryList_2>;
}

export interface DatoCmsModelConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsModelConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsModelConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsModelConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsModelConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionSingletonQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelConnectionSortableQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelConnectionApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionTreeQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelConnectionModularBlockQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelConnectionDraftModeActiveQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelConnectionAllLocalesRequiredQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelConnectionCollectionAppeareanceQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionHasSingletonItemQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelConnectionFieldsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsModelConnectionFieldsInputObject_2>;
}

export interface DatoCmsModelConnectionFieldsInputObject_2 {
  
  id?: Maybe<DatoCmsModelConnectionFieldsIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsModelConnectionFieldsOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsModelConnectionFieldsInternalInputObject_2>;
  
  label?: Maybe<DatoCmsModelConnectionFieldsLabelQueryString_2>;
  
  fieldType?: Maybe<DatoCmsModelConnectionFieldsFieldTypeQueryString_2>;
  
  apiKey?: Maybe<DatoCmsModelConnectionFieldsApiKeyQueryString_2>;
  
  localized?: Maybe<DatoCmsModelConnectionFieldsLocalizedQueryBoolean_2>;
  
  validators?: Maybe<DatoCmsModelConnectionFieldsValidatorsInputObject_2>;
  
  position?: Maybe<DatoCmsModelConnectionFieldsPositionQueryInteger_2>;
  
  appeareance?: Maybe<DatoCmsModelConnectionFieldsAppeareanceInputObject_2>;
}

export interface DatoCmsModelConnectionFieldsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsModelConnectionFieldsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsModelConnectionFieldsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsModelConnectionFieldsInternalOwnerQueryString_2>;
}

export interface DatoCmsModelConnectionFieldsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsLabelQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsFieldTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsLocalizedQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelConnectionFieldsValidatorsInputObject_2 {
  
  enum?: Maybe<DatoCmsModelConnectionFieldsValidatorsEnumInputObject_2>;
  
  slugTitleField?: Maybe<DatoCmsModelConnectionFieldsValidatorsSlugTitleFieldInputObject_2>;
  
  extension?: Maybe<DatoCmsModelConnectionFieldsValidatorsExtensionInputObject_2>;
}

export interface DatoCmsModelConnectionFieldsValidatorsEnumInputObject_2 {
  
  values?: Maybe<DatoCmsModelConnectionFieldsValidatorsEnumValuesQueryList_2>;
}

export interface DatoCmsModelConnectionFieldsValidatorsEnumValuesQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsValidatorsSlugTitleFieldInputObject_2 {
  
  titleFieldId?: Maybe<DatoCmsModelConnectionFieldsValidatorsSlugTitleFieldTitleFieldIdQueryString_2>;
}

export interface DatoCmsModelConnectionFieldsValidatorsSlugTitleFieldTitleFieldIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsValidatorsExtensionInputObject_2 {
  
  predefinedList?: Maybe<DatoCmsModelConnectionFieldsValidatorsExtensionPredefinedListQueryString_2>;
}

export interface DatoCmsModelConnectionFieldsValidatorsExtensionPredefinedListQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsPositionQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsModelConnectionFieldsAppeareanceInputObject_2 {
  
  editor?: Maybe<DatoCmsModelConnectionFieldsAppeareanceEditorQueryString_2>;
  
  parameters?: Maybe<DatoCmsModelConnectionFieldsAppeareanceParametersInputObject_2>;
  
  type?: Maybe<DatoCmsModelConnectionFieldsAppeareanceTypeQueryString_2>;
}

export interface DatoCmsModelConnectionFieldsAppeareanceEditorQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsAppeareanceParametersInputObject_2 {
  
  toolbar?: Maybe<DatoCmsModelConnectionFieldsAppeareanceParametersToolbarQueryList_2>;
  
  heading?: Maybe<DatoCmsModelConnectionFieldsAppeareanceParametersHeadingQueryBoolean_2>;
}

export interface DatoCmsModelConnectionFieldsAppeareanceParametersToolbarQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelConnectionFieldsAppeareanceParametersHeadingQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelConnectionFieldsAppeareanceTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeConnectionSort {
  
  fields: (Maybe<DatoCmsHomeIntroTextTextNodeConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsHomeIntroTextTextNodeConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsHomeIntroTextTextNode {
  
  id?: Maybe<DatoCmsHomeIntroTextTextNodeConnectionIdQueryString_2>;
  
  introText?: Maybe<DatoCmsHomeIntroTextTextNodeConnectionIntroTextQueryString_2>;
  
  internal?: Maybe<DatoCmsHomeIntroTextTextNodeConnectionInternalInputObject_2>;
}

export interface DatoCmsHomeIntroTextTextNodeConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeConnectionIntroTextQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsHomeIntroTextTextNodeConnectionInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsHomeIntroTextTextNodeConnectionInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsHomeIntroTextTextNodeConnectionInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsHomeIntroTextTextNodeConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsHomeIntroTextTextNodeConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsHomeIntroTextTextNodeConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeConnectionInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeConnectionInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsConnectionSort {
  
  fields: (Maybe<DatoCmsSeoMetaTagsConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsSeoMetaTagsConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsSeoMetaTags {
  
  id?: Maybe<DatoCmsSeoMetaTagsConnectionIdQueryString_2>;
  
  tags?: Maybe<DatoCmsSeoMetaTagsConnectionTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsSeoMetaTagsConnectionInternalInputObject_2>;
}

export interface DatoCmsSeoMetaTagsConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsConnectionTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsSeoMetaTagsConnectionTagsInputObject_2>;
}

export interface DatoCmsSeoMetaTagsConnectionTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsSeoMetaTagsConnectionTagsTagNameQueryString_2>;
  
  content?: Maybe<DatoCmsSeoMetaTagsConnectionTagsContentQueryString_2>;
  
  attributes?: Maybe<DatoCmsSeoMetaTagsConnectionTagsAttributesInputObject_2>;
}

export interface DatoCmsSeoMetaTagsConnectionTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsConnectionTagsContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsConnectionTagsAttributesInputObject_2 {
  
  property?: Maybe<DatoCmsSeoMetaTagsConnectionTagsAttributesPropertyQueryString_2>;
  
  content?: Maybe<DatoCmsSeoMetaTagsConnectionTagsAttributesContentQueryString_2>;
  
  name?: Maybe<DatoCmsSeoMetaTagsConnectionTagsAttributesNameQueryString_2>;
}

export interface DatoCmsSeoMetaTagsConnectionTagsAttributesPropertyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsConnectionTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsConnectionTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSeoMetaTagsConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSeoMetaTagsConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSeoMetaTagsConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsSeoMetaTagsConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetConnectionSort {
  
  fields: (Maybe<DatoCmsAssetConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsAssetConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsAsset {
  
  id?: Maybe<DatoCmsAssetConnectionIdQueryString_2>;
  
  internal?: Maybe<DatoCmsAssetConnectionInternalInputObject_2>;
  
  format?: Maybe<DatoCmsAssetConnectionFormatQueryString_2>;
  
  size?: Maybe<DatoCmsAssetConnectionSizeQueryInteger_2>;
  
  width?: Maybe<DatoCmsAssetConnectionWidthQueryInteger_2>;
  
  height?: Maybe<DatoCmsAssetConnectionHeightQueryInteger_2>;
  
  url?: Maybe<DatoCmsAssetConnectionUrlQueryString_2>;
  
  resolutions?: Maybe<ResolutionsTypeName_4>;
  
  sizes?: Maybe<SizesTypeName_4>;
  
  inlineSvg?: Maybe<InlineSvgQueryString_4>;
  
  fluid?: Maybe<FluidTypeName_4>;
  
  fixed?: Maybe<FixedTypeName_4>;
}

export interface DatoCmsAssetConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAssetConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAssetConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAssetConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsAssetConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetConnectionFormatQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetConnectionSizeQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAssetConnectionWidthQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAssetConnectionHeightQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAssetConnectionUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTypeName_4 {
  
  base64?: Maybe<ResolutionsBase64QueryString_4>;
  
  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_4>;
  
  width?: Maybe<ResolutionsWidthQueryFloat_4>;
  
  height?: Maybe<ResolutionsHeightQueryFloat_4>;
  
  src?: Maybe<ResolutionsSrcQueryString_4>;
  
  srcSet?: Maybe<ResolutionsSrcSetQueryString_4>;
}

export interface ResolutionsBase64QueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsAspectRatioQueryFloat_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsWidthQueryFloat_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsHeightQueryFloat_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsSrcQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTypeName_4 {
  
  base64?: Maybe<SizesBase64QueryString_4>;
  
  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_4>;
  
  src?: Maybe<SizesSrcQueryString_4>;
  
  srcSet?: Maybe<SizesSrcSetQueryString_4>;
  
  sizes?: Maybe<SizesSizesQueryString_4>;
}

export interface SizesBase64QueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesAspectRatioQueryFloat_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesSrcQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSizesQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface InlineSvgQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTypeName_4 {
  
  base64?: Maybe<FluidBase64QueryString_4>;
  
  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_4>;
  
  src?: Maybe<FluidSrcQueryString_4>;
  
  srcSet?: Maybe<FluidSrcSetQueryString_4>;
  
  sizes?: Maybe<FluidSizesQueryString_4>;
}

export interface FluidBase64QueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidAspectRatioQueryFloat_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidSrcQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSizesQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTypeName_4 {
  
  base64?: Maybe<FixedBase64QueryString_4>;
  
  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_4>;
  
  width?: Maybe<FixedWidthQueryFloat_4>;
  
  height?: Maybe<FixedHeightQueryFloat_4>;
  
  src?: Maybe<FixedSrcQueryString_4>;
  
  srcSet?: Maybe<FixedSrcSetQueryString_4>;
}

export interface FixedBase64QueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedAspectRatioQueryFloat_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedWidthQueryFloat_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedHeightQueryFloat_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedSrcQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsImgixParams {
  /** Applies automatic enhancements to images. (https://docs.imgix.com/apis/url/auto) */
  auto?: Maybe<string>;
  /** Changes the blend alignment relative to the parent image. (https://docs.imgix.com/apis/url/blending/ba) */
  ba?: Maybe<string>;
  /** Changes the alpha of the blend image. (https://docs.imgix.com/apis/url/blending/balph) */
  balph?: Maybe<number>;
  /** Specifies the type of crop for blend images. (https://docs.imgix.com/apis/url/blending/bc) */
  bc?: Maybe<string>;
  /** Specifies the fit mode for blend images. (https://docs.imgix.com/apis/url/blending/bf) */
  bf?: Maybe<string>;
  /** Colors the background of padded images. (https://docs.imgix.com/apis/url/bg) */
  bg?: Maybe<string>;
  /** Adjusts the height of the blend image. (https://docs.imgix.com/apis/url/blending/bh) */
  bh?: Maybe<string>;
  /** Specifies the location of the blend image. (https://docs.imgix.com/apis/url/blending/blend) */
  blend?: Maybe<string>;
  /** Applies a gaussian blur to an image. (https://docs.imgix.com/apis/url/stylize/blur) */
  blur?: Maybe<number>;
  /** Sets the blend mode for a blend image. (https://docs.imgix.com/apis/url/blending/bm) */
  bm?: Maybe<string>;
  /** Sets the inner radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner) */
  borderRadiusInner?: Maybe<string>;
  /** Sets the outer radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius) */
  borderRadius?: Maybe<string>;
  /** Applies a border to an image. (https://docs.imgix.com/apis/url/border-and-padding/border) */
  border?: Maybe<string>;
  /** Applies padding to the blend image. (https://docs.imgix.com/apis/url/blending/bp) */
  bp?: Maybe<number>;
  /** Adjusts the brightness of the source image. (https://docs.imgix.com/apis/url/adjustment/bri) */
  bri?: Maybe<number>;
  /** Adjusts the size of the blend image. (https://docs.imgix.com/apis/url/blending/bs) */
  bs?: Maybe<string>;
  /** Adjusts the width of the blend image. (https://docs.imgix.com/apis/url/blending/bw) */
  bw?: Maybe<string>;
  /** Adjusts the x-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/bx) */
  bx?: Maybe<number>;
  /** Adjusts the y-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/by) */
  by?: Maybe<number>;
  /** Sets one or more Client-Hints headers (https://docs.imgix.com/apis/url/format/ch) */
  ch?: Maybe<string>;
  /** Specifies the output chroma subsampling rate. (https://docs.imgix.com/apis/url/format/chromasub) */
  chromasub?: Maybe<number>;
  /** Limits the number of unique colors in an image. (https://docs.imgix.com/apis/url/format/colorquant) */
  colorquant?: Maybe<number>;
  /** Specifies how many colors to include in a palette-extraction response. (https://docs.imgix.com/apis/url/color-palette/colors) */
  colors?: Maybe<number>;
  /** Adjusts the contrast of the source image. (https://docs.imgix.com/apis/url/adjustment/con) */
  con?: Maybe<number>;
  /** Specifies the radius value for a rounded corner mask. (https://docs.imgix.com/apis/url/mask/corner-radius) */
  cornerRadius?: Maybe<string>;
  /** Specifies how to crop an image. (https://docs.imgix.com/apis/url/size/crop) */
  crop?: Maybe<string>;
  /** Specifies the color space of the output image. (https://docs.imgix.com/apis/url/format/cs) */
  cs?: Maybe<string>;
  /** Forces a URL to use send-file in its response. (https://docs.imgix.com/apis/url/format/dl) */
  dl?: Maybe<string>;
  /** Sets the DPI value in the EXIF header. (https://docs.imgix.com/apis/url/format/dpi) */
  dpi?: Maybe<number>;
  /** Adjusts the device-pixel ratio of the output image. (https://docs.imgix.com/apis/url/dpr) */
  dpr?: Maybe<number>;
  /** Adjusts the exposure of the output image. (https://docs.imgix.com/apis/url/adjustment/exp) */
  exp?: Maybe<number>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. (https://docs.imgix.com/apis/url/expires) */
  expires?: Maybe<string>;
  /** Selects a face to crop to. (https://docs.imgix.com/apis/url/face-detection/faceindex) */
  faceindex?: Maybe<number>;
  /** Adjusts padding around a selected face. (https://docs.imgix.com/apis/url/face-detection/facepad) */
  facepad?: Maybe<number>;
  /** Specifies that face data should be included in output when combined with `fm=json`. (https://docs.imgix.com/apis/url/face-detection/faces) */
  faces?: Maybe<number>;
  /** Specifies how to map the source image to the output image dimensions. (https://docs.imgix.com/apis/url/size/fit) */
  fit?: Maybe<string>;
  /** Flips an image on a specified axis. (https://docs.imgix.com/apis/url/rotation/flip) */
  flip?: Maybe<string>;
  /** Changes the format of the output image. (https://docs.imgix.com/apis/url/format/fm) */
  fm?: Maybe<string>;
  /** Displays crosshairs identifying the location of the set focal point (https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug) */
  fpDebug?: Maybe<boolean>;
  /** Sets the relative horizontal value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-x) */
  fpX?: Maybe<number>;
  /** Sets the relative vertical value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-y) */
  fpY?: Maybe<number>;
  /** Sets the relative zoom value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-z) */
  fpZ?: Maybe<number>;
  /** Adjusts the gamma of the source image. (https://docs.imgix.com/apis/url/adjustment/gam) */
  gam?: Maybe<number>;
  /** Adjusts the height of the output image. (https://docs.imgix.com/apis/url/size/h) */
  h?: Maybe<string>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/high) */
  high?: Maybe<number>;
  /** Applies a half-tone effect to the source image. (https://docs.imgix.com/apis/url/stylize/htn) */
  htn?: Maybe<number>;
  /** Adjusts the hue of the source image. (https://docs.imgix.com/apis/url/adjustment/hue) */
  hue?: Maybe<number>;
  /** Inverts the colors on the source image. (https://docs.imgix.com/apis/url/adjustment/invert) */
  invert?: Maybe<boolean>;
  /** Specifies that the output image should be a lossless variant. (https://docs.imgix.com/apis/url/format/lossless) */
  lossless?: Maybe<boolean>;
  /** Specifies the location of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark) */
  mark?: Maybe<string>;
  /** Changes the watermark alignment relative to the parent image. (https://docs.imgix.com/apis/url/watermark/markalign) */
  markalign?: Maybe<string>;
  /** Changes the alpha of the watermark image. (https://docs.imgix.com/apis/url/watermark/markalpha) */
  markalpha?: Maybe<number>;
  /** Changes base URL of the watermark image. (https://docs.imgix.com/apis/url/watermark/markbase) */
  markbase?: Maybe<string>;
  /** Specifies the fit mode for watermark images. (https://docs.imgix.com/apis/url/watermark/markfit) */
  markfit?: Maybe<string>;
  /** Adjusts the height of the watermark image. (https://docs.imgix.com/apis/url/watermark/markh) */
  markh?: Maybe<string>;
  /** Applies padding to the watermark image. (https://docs.imgix.com/apis/url/watermark/markpad) */
  markpad?: Maybe<number>;
  /** Adjusts the scale of the watermark image. (https://docs.imgix.com/apis/url/watermark/markscale) */
  markscale?: Maybe<number>;
  /** Adjusts the width of the watermark image. (https://docs.imgix.com/apis/url/watermark/markw) */
  markw?: Maybe<string>;
  /** Adjusts the x-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/markx) */
  markx?: Maybe<number>;
  /** Adjusts the y-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/marky) */
  marky?: Maybe<number>;
  /** Defines the type of mask and specifies the URL if that type is selected. (https://docs.imgix.com/apis/url/mask) */
  mask?: Maybe<string>;
  /** Colors the background of the transparent mask area of images (https://docs.imgix.com/apis/url/mask/mask-bg) */
  maskbg?: Maybe<string>;
  /** Specifies the maximum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-h) */
  maxH?: Maybe<number>;
  /** Specifies the maximum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-w) */
  maxW?: Maybe<number>;
  /** Specifies the minimum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-h) */
  minH?: Maybe<number>;
  /** Specifies the minimum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-w) */
  minW?: Maybe<number>;
  /** Applies a monochrome effect to the source image. (https://docs.imgix.com/apis/url/stylize/mono) */
  mono?: Maybe<string>;
  /** Reduces the noise in an image. (https://docs.imgix.com/apis/url/noise-reduction/nr) */
  nr?: Maybe<number>;
  /** Provides a threshold by which to sharpen an image. (https://docs.imgix.com/apis/url/noise-reduction/nrs) */
  nrs?: Maybe<number>;
  /** Changes the image orientation. (https://docs.imgix.com/apis/url/rotation/or) */
  or?: Maybe<number>;
  /** Pads an image. (https://docs.imgix.com/apis/url/border-and-padding/pad) */
  pad?: Maybe<number>;
  /** Selects a page from a PDF for display. (https://docs.imgix.com/apis/url/pdf-page-number) */
  page?: Maybe<number>;
  /** Specifies an output format for palette-extraction. (https://docs.imgix.com/apis/url/color-palette/palette) */
  palette?: Maybe<string>;
  /** Specifies a CSS prefix for all classes in palette-extraction. (https://docs.imgix.com/apis/url/color-palette/prefix) */
  prefix?: Maybe<string>;
  /** Applies a pixelation effect to an image. (https://docs.imgix.com/apis/url/stylize/px) */
  px?: Maybe<number>;
  /** Adjusts the quality of an output image. (https://docs.imgix.com/apis/url/format/q) */
  q?: Maybe<number>;
  /** Crops an image to a specified rectangle. (https://docs.imgix.com/apis/url/size/rect) */
  rect?: Maybe<string>;
  /** Rotates an image by a specified number of degrees. (https://docs.imgix.com/apis/url/rotation/rot) */
  rot?: Maybe<number>;
  /** Adjusts the saturation of an image. (https://docs.imgix.com/apis/url/adjustment/sat) */
  sat?: Maybe<number>;
  /** Applies a sepia effect to an image. (https://docs.imgix.com/apis/url/stylize/sepia) */
  sepia?: Maybe<number>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/shad) */
  shad?: Maybe<number>;
  /** Adjusts the sharpness of the source image. (https://docs.imgix.com/apis/url/adjustment/sharp) */
  sharp?: Maybe<number>;
  /** Trims the source image. (https://docs.imgix.com/apis/url/trim/trim) */
  trim?: Maybe<string>;
  /** Specifies a trim color on a trim operation. (https://docs.imgix.com/apis/url/trim/trimcolor) */
  trimcolor?: Maybe<string>;
  /** Specifies the mean difference on a trim operation. (https://docs.imgix.com/apis/url/trim/trimmd) */
  trimmd?: Maybe<number>;
  /** Specifies the standard deviation on a trim operation. (https://docs.imgix.com/apis/url/trim/trimsd) */
  trimsd?: Maybe<number>;
  /** Specifies the tolerance on a trim operation. (https://docs.imgix.com/apis/url/trim/trimtol) */
  trimtol?: Maybe<number>;
  /** Sets the text string to render. (https://docs.imgix.com/apis/url/text/txt) */
  txt?: Maybe<string>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. (https://docs.imgix.com/apis/url/text/txtalign) */
  txtalign?: Maybe<string>;
  /** Sets the clipping properties of rendered text. (https://docs.imgix.com/apis/url/text/txtclip) */
  txtclip?: Maybe<string>;
  /** Specifies the color of rendered text. (https://docs.imgix.com/apis/url/text/txtclr) */
  txtclr?: Maybe<string>;
  /** Specifies the fit approach for rendered text. (https://docs.imgix.com/apis/url/text/txtfit) */
  txtfit?: Maybe<string>;
  /** Selects a font for rendered text. (https://docs.imgix.com/apis/url/text/txtfont) */
  txtfont?: Maybe<string>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/text/txtlead) */
  txtlead?: Maybe<number>;
  /** Controls the level of ligature substitution (https://docs.imgix.com/apis/url/text/txtlig) */
  txtlig?: Maybe<number>;
  /** Outlines the rendered text with a specified color. (https://docs.imgix.com/apis/url/text/txtline) */
  txtline?: Maybe<number>;
  /** Specifies a text outline color. (https://docs.imgix.com/apis/url/text/txtlineclr) */
  txtlineclr?: Maybe<string>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. (https://docs.imgix.com/apis/url/text/txtpad) */
  txtpad?: Maybe<number>;
  /** Applies a shadow to rendered text. (https://docs.imgix.com/apis/url/text/txtshad) */
  txtshad?: Maybe<number>;
  /** Sets the font size of rendered text. (https://docs.imgix.com/apis/url/text/txtsize) */
  txtsize?: Maybe<number>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/text/txtlead) */
  txttrack?: Maybe<number>;
  /** Sets the width of rendered text. (https://docs.imgix.com/apis/url/text/txtwidth) */
  txtwidth?: Maybe<number>;
  /** Sharpens the source image using an unsharp mask. (https://docs.imgix.com/apis/url/adjustment/usm) */
  usm?: Maybe<number>;
  /** Specifies the radius for an unsharp mask operation. (https://docs.imgix.com/apis/url/adjustment/usmrad) */
  usmrad?: Maybe<number>;
  /** Adjusts the vibrance of an image. (https://docs.imgix.com/apis/url/adjustment/vib) */
  vib?: Maybe<number>;
  /** Adjusts the width of the output image. (https://docs.imgix.com/apis/url/size/w) */
  w?: Maybe<string>;
}

export interface DatoCmsAboutPageBioTextNodeConnectionSort {
  
  fields: (Maybe<DatoCmsAboutPageBioTextNodeConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsAboutPageBioTextNodeConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsAboutPageBioTextNode {
  
  id?: Maybe<DatoCmsAboutPageBioTextNodeConnectionIdQueryString_2>;
  
  bio?: Maybe<DatoCmsAboutPageBioTextNodeConnectionBioQueryString_2>;
  
  internal?: Maybe<DatoCmsAboutPageBioTextNodeConnectionInternalInputObject_2>;
}

export interface DatoCmsAboutPageBioTextNodeConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeConnectionBioQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPageBioTextNodeConnectionInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsAboutPageBioTextNodeConnectionInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsAboutPageBioTextNodeConnectionInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPageBioTextNodeConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPageBioTextNodeConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPageBioTextNodeConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeConnectionInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeConnectionInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeConnectionSort {
  
  fields: (Maybe<DatoCmsWorkExcerptTextNodeConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsWorkExcerptTextNodeConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsWorkExcerptTextNode {
  
  id?: Maybe<DatoCmsWorkExcerptTextNodeConnectionIdQueryString_2>;
  
  excerpt?: Maybe<DatoCmsWorkExcerptTextNodeConnectionExcerptQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkExcerptTextNodeConnectionInternalInputObject_2>;
}

export interface DatoCmsWorkExcerptTextNodeConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeConnectionExcerptQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkExcerptTextNodeConnectionInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsWorkExcerptTextNodeConnectionInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsWorkExcerptTextNodeConnectionInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkExcerptTextNodeConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkExcerptTextNodeConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkExcerptTextNodeConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeConnectionInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeConnectionInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeConnectionSort {
  
  fields: (Maybe<DatoCmsWorkDescriptionTextNodeConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsWorkDescriptionTextNodeConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsWorkDescriptionTextNode {
  
  id?: Maybe<DatoCmsWorkDescriptionTextNodeConnectionIdQueryString_2>;
  
  description?: Maybe<DatoCmsWorkDescriptionTextNodeConnectionDescriptionQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkDescriptionTextNodeConnectionInternalInputObject_2>;
}

export interface DatoCmsWorkDescriptionTextNodeConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeConnectionDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkDescriptionTextNodeConnectionInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsWorkDescriptionTextNodeConnectionInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsWorkDescriptionTextNodeConnectionInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkDescriptionTextNodeConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkDescriptionTextNodeConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkDescriptionTextNodeConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeConnectionInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeConnectionInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSort {
  
  fields: (Maybe<DatoCmsHomeConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsHomeConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsHome {
  
  id?: Maybe<DatoCmsHomeConnectionIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsHomeConnectionOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsHomeConnectionInternalInputObject_2>;
  
  locale?: Maybe<DatoCmsHomeConnectionLocaleQueryString_2>;
  
  model?: Maybe<DatoCmsHomeConnectionModelInputObject_2>;
  
  introTextNode?: Maybe<DatoCmsHomeConnectionIntroTextNodeInputObject_2>;
  
  introText?: Maybe<DatoCmsHomeConnectionIntroTextQueryString_2>;
  
  copyright?: Maybe<DatoCmsHomeConnectionCopyrightQueryString_2>;
  
  seoSettings?: Maybe<DatoCmsHomeConnectionSeoSettingsInputObject_2>;
  
  seoMetaTags?: Maybe<DatoCmsHomeConnectionSeoMetaTagsInputObject_2>;
  
  updatedAt?: Maybe<DatoCmsHomeConnectionUpdatedAtQueryString_2>;
}

export interface DatoCmsHomeConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsHomeConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsHomeConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsHomeConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsHomeConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionLocaleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionModelInputObject_2 {
  
  id?: Maybe<DatoCmsHomeConnectionModelIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsHomeConnectionModelOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsHomeConnectionModelInternalInputObject_2>;
  
  name?: Maybe<DatoCmsHomeConnectionModelNameQueryString_2>;
  
  singleton?: Maybe<DatoCmsHomeConnectionModelSingletonQueryBoolean_2>;
  
  sortable?: Maybe<DatoCmsHomeConnectionModelSortableQueryBoolean_2>;
  
  apiKey?: Maybe<DatoCmsHomeConnectionModelApiKeyQueryString_2>;
  
  tree?: Maybe<DatoCmsHomeConnectionModelTreeQueryBoolean_2>;
  
  modularBlock?: Maybe<DatoCmsHomeConnectionModelModularBlockQueryBoolean_2>;
  
  draftModeActive?: Maybe<DatoCmsHomeConnectionModelDraftModeActiveQueryBoolean_2>;
  
  allLocalesRequired?: Maybe<DatoCmsHomeConnectionModelAllLocalesRequiredQueryBoolean_2>;
  
  collectionAppeareance?: Maybe<DatoCmsHomeConnectionModelCollectionAppeareanceQueryString_2>;
  
  hasSingletonItem?: Maybe<DatoCmsHomeConnectionModelHasSingletonItemQueryBoolean_2>;
}

export interface DatoCmsHomeConnectionModelIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionModelOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionModelInternalInputObject_2 {
  
  type?: Maybe<DatoCmsHomeConnectionModelInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsHomeConnectionModelInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsHomeConnectionModelInternalOwnerQueryString_2>;
}

export interface DatoCmsHomeConnectionModelInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionModelInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionModelInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionModelNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionModelSingletonQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeConnectionModelSortableQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeConnectionModelApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionModelTreeQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeConnectionModelModularBlockQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeConnectionModelDraftModeActiveQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeConnectionModelAllLocalesRequiredQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeConnectionModelCollectionAppeareanceQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionModelHasSingletonItemQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeConnectionIntroTextNodeInputObject_2 {
  
  id?: Maybe<DatoCmsHomeConnectionIntroTextNodeIdQueryString_2>;
  
  parent?: Maybe<DatoCmsHomeConnectionIntroTextNodeParentQueryString_2>;
  
  children?: Maybe<DatoCmsHomeConnectionIntroTextNodeChildrenQueryList_2>;
  
  introText?: Maybe<DatoCmsHomeConnectionIntroTextNodeIntroTextQueryString_2>;
  
  internal?: Maybe<DatoCmsHomeConnectionIntroTextNodeInternalInputObject_2>;
}

export interface DatoCmsHomeConnectionIntroTextNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionIntroTextNodeParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionIntroTextNodeChildrenQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionIntroTextNodeIntroTextQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionIntroTextNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsHomeConnectionIntroTextNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsHomeConnectionIntroTextNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsHomeConnectionIntroTextNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsHomeConnectionIntroTextNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsHomeConnectionIntroTextNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsHomeConnectionIntroTextNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionIntroTextNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionIntroTextNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionIntroTextNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionIntroTextNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionIntroTextQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionCopyrightQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoSettingsInputObject_2 {
  
  title?: Maybe<DatoCmsHomeConnectionSeoSettingsTitleQueryString_2>;
  
  description?: Maybe<DatoCmsHomeConnectionSeoSettingsDescriptionQueryString_2>;
  
  twitterCard?: Maybe<DatoCmsHomeConnectionSeoSettingsTwitterCardQueryString_2>;
}

export interface DatoCmsHomeConnectionSeoSettingsTitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoSettingsDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoSettingsTwitterCardQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsInputObject_2 {
  
  id?: Maybe<DatoCmsHomeConnectionSeoMetaTagsIdQueryString_2>;
  
  parent?: Maybe<DatoCmsHomeConnectionSeoMetaTagsParentQueryString_2>;
  
  tags?: Maybe<DatoCmsHomeConnectionSeoMetaTagsTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsHomeConnectionSeoMetaTagsInternalInputObject_2>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsHomeConnectionSeoMetaTagsTagsInputObject_2>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsHomeConnectionSeoMetaTagsTagsTagNameQueryString_2>;
  
  content?: Maybe<DatoCmsHomeConnectionSeoMetaTagsTagsContentQueryString_2>;
  
  attributes?: Maybe<DatoCmsHomeConnectionSeoMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsTagsContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsTagsAttributesInputObject_2 {
  
  property?: Maybe<DatoCmsHomeConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2>;
  
  content?: Maybe<DatoCmsHomeConnectionSeoMetaTagsTagsAttributesContentQueryString_2>;
  
  name?: Maybe<DatoCmsHomeConnectionSeoMetaTagsTagsAttributesNameQueryString_2>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsHomeConnectionSeoMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsHomeConnectionSeoMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsHomeConnectionSeoMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionSeoMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeConnectionUpdatedAtQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionSort {
  
  fields: (Maybe<DatoCmsSocialProfileConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsSocialProfileConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsSocialProfile {
  
  id?: Maybe<DatoCmsSocialProfileConnectionIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsSocialProfileConnectionOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsSocialProfileConnectionInternalInputObject_2>;
  
  locale?: Maybe<DatoCmsSocialProfileConnectionLocaleQueryString_2>;
  
  model?: Maybe<DatoCmsSocialProfileConnectionModelInputObject_2>;
  
  profileType?: Maybe<DatoCmsSocialProfileConnectionProfileTypeQueryString_2>;
  
  url?: Maybe<DatoCmsSocialProfileConnectionUrlQueryString_2>;
  
  seoMetaTags?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsInputObject_2>;
  
  updatedAt?: Maybe<DatoCmsSocialProfileConnectionUpdatedAtQueryString_2>;
  
  position?: Maybe<DatoCmsSocialProfileConnectionPositionQueryInteger_2>;
}

export interface DatoCmsSocialProfileConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSocialProfileConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSocialProfileConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSocialProfileConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsSocialProfileConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionLocaleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelInputObject_2 {
  
  id?: Maybe<DatoCmsSocialProfileConnectionModelIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsSocialProfileConnectionModelOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsSocialProfileConnectionModelInternalInputObject_2>;
  
  name?: Maybe<DatoCmsSocialProfileConnectionModelNameQueryString_2>;
  
  singleton?: Maybe<DatoCmsSocialProfileConnectionModelSingletonQueryBoolean_2>;
  
  sortable?: Maybe<DatoCmsSocialProfileConnectionModelSortableQueryBoolean_2>;
  
  apiKey?: Maybe<DatoCmsSocialProfileConnectionModelApiKeyQueryString_2>;
  
  tree?: Maybe<DatoCmsSocialProfileConnectionModelTreeQueryBoolean_2>;
  
  modularBlock?: Maybe<DatoCmsSocialProfileConnectionModelModularBlockQueryBoolean_2>;
  
  draftModeActive?: Maybe<DatoCmsSocialProfileConnectionModelDraftModeActiveQueryBoolean_2>;
  
  allLocalesRequired?: Maybe<DatoCmsSocialProfileConnectionModelAllLocalesRequiredQueryBoolean_2>;
  
  collectionAppeareance?: Maybe<DatoCmsSocialProfileConnectionModelCollectionAppeareanceQueryString_2>;
  
  hasSingletonItem?: Maybe<DatoCmsSocialProfileConnectionModelHasSingletonItemQueryBoolean_2>;
}

export interface DatoCmsSocialProfileConnectionModelIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSocialProfileConnectionModelInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSocialProfileConnectionModelInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSocialProfileConnectionModelInternalOwnerQueryString_2>;
}

export interface DatoCmsSocialProfileConnectionModelInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelSingletonQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelSortableQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelTreeQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelModularBlockQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelDraftModeActiveQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelAllLocalesRequiredQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelCollectionAppeareanceQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionModelHasSingletonItemQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileConnectionProfileTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsInputObject_2 {
  
  id?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsIdQueryString_2>;
  
  parent?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsParentQueryString_2>;
  
  tags?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsInternalInputObject_2>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsTagsInputObject_2>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsTagsTagNameQueryString_2>;
  
  content?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsTagsContentQueryString_2>;
  
  attributes?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsTagsContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsTagsAttributesInputObject_2 {
  
  property?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2>;
  
  content?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsTagsAttributesContentQueryString_2>;
  
  name?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsTagsAttributesNameQueryString_2>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSocialProfileConnectionSeoMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionSeoMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionUpdatedAtQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileConnectionPositionQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAboutPageConnectionSort {
  
  fields: (Maybe<DatoCmsAboutPageConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsAboutPageConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsAboutPage {
  
  id?: Maybe<DatoCmsAboutPageConnectionIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsAboutPageConnectionOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsAboutPageConnectionInternalInputObject_2>;
  
  locale?: Maybe<DatoCmsAboutPageConnectionLocaleQueryString_2>;
  
  model?: Maybe<DatoCmsAboutPageConnectionModelInputObject_2>;
  
  title?: Maybe<DatoCmsAboutPageConnectionTitleQueryString_2>;
  
  subtitle?: Maybe<DatoCmsAboutPageConnectionSubtitleQueryString_2>;
  
  photo?: Maybe<DatoCmsAboutPageConnectionPhotoInputObject_2>;
  
  bioNode?: Maybe<DatoCmsAboutPageConnectionBioNodeInputObject_2>;
  
  bio?: Maybe<DatoCmsAboutPageConnectionBioQueryString_2>;
  
  seoMetaTags?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsInputObject_2>;
  
  updatedAt?: Maybe<DatoCmsAboutPageConnectionUpdatedAtQueryString_2>;
}

export interface DatoCmsAboutPageConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPageConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPageConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPageConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPageConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionLocaleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionModelInputObject_2 {
  
  id?: Maybe<DatoCmsAboutPageConnectionModelIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsAboutPageConnectionModelOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsAboutPageConnectionModelInternalInputObject_2>;
  
  name?: Maybe<DatoCmsAboutPageConnectionModelNameQueryString_2>;
  
  singleton?: Maybe<DatoCmsAboutPageConnectionModelSingletonQueryBoolean_2>;
  
  sortable?: Maybe<DatoCmsAboutPageConnectionModelSortableQueryBoolean_2>;
  
  apiKey?: Maybe<DatoCmsAboutPageConnectionModelApiKeyQueryString_2>;
  
  tree?: Maybe<DatoCmsAboutPageConnectionModelTreeQueryBoolean_2>;
  
  modularBlock?: Maybe<DatoCmsAboutPageConnectionModelModularBlockQueryBoolean_2>;
  
  draftModeActive?: Maybe<DatoCmsAboutPageConnectionModelDraftModeActiveQueryBoolean_2>;
  
  allLocalesRequired?: Maybe<DatoCmsAboutPageConnectionModelAllLocalesRequiredQueryBoolean_2>;
  
  collectionAppeareance?: Maybe<DatoCmsAboutPageConnectionModelCollectionAppeareanceQueryString_2>;
  
  hasSingletonItem?: Maybe<DatoCmsAboutPageConnectionModelHasSingletonItemQueryBoolean_2>;
}

export interface DatoCmsAboutPageConnectionModelIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionModelOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionModelInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPageConnectionModelInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPageConnectionModelInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPageConnectionModelInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPageConnectionModelInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionModelInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionModelInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionModelNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionModelSingletonQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageConnectionModelSortableQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageConnectionModelApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionModelTreeQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageConnectionModelModularBlockQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageConnectionModelDraftModeActiveQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageConnectionModelAllLocalesRequiredQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageConnectionModelCollectionAppeareanceQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionModelHasSingletonItemQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageConnectionTitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionSubtitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionPhotoInputObject_2 {
  
  id?: Maybe<DatoCmsAboutPageConnectionPhotoIdQueryString_2>;
  
  parent?: Maybe<DatoCmsAboutPageConnectionPhotoParentQueryString_2>;
  
  internal?: Maybe<DatoCmsAboutPageConnectionPhotoInternalInputObject_2>;
  
  format?: Maybe<DatoCmsAboutPageConnectionPhotoFormatQueryString_2>;
  
  size?: Maybe<DatoCmsAboutPageConnectionPhotoSizeQueryInteger_2>;
  
  width?: Maybe<DatoCmsAboutPageConnectionPhotoWidthQueryInteger_2>;
  
  height?: Maybe<DatoCmsAboutPageConnectionPhotoHeightQueryInteger_2>;
  
  url?: Maybe<DatoCmsAboutPageConnectionPhotoUrlQueryString_2>;
}

export interface DatoCmsAboutPageConnectionPhotoIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionPhotoParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionPhotoInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPageConnectionPhotoInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPageConnectionPhotoInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPageConnectionPhotoInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPageConnectionPhotoInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionPhotoInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionPhotoInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionPhotoFormatQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionPhotoSizeQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAboutPageConnectionPhotoWidthQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAboutPageConnectionPhotoHeightQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAboutPageConnectionPhotoUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionBioNodeInputObject_2 {
  
  id?: Maybe<DatoCmsAboutPageConnectionBioNodeIdQueryString_2>;
  
  parent?: Maybe<DatoCmsAboutPageConnectionBioNodeParentQueryString_2>;
  
  children?: Maybe<DatoCmsAboutPageConnectionBioNodeChildrenQueryList_2>;
  
  bio?: Maybe<DatoCmsAboutPageConnectionBioNodeBioQueryString_2>;
  
  internal?: Maybe<DatoCmsAboutPageConnectionBioNodeInternalInputObject_2>;
}

export interface DatoCmsAboutPageConnectionBioNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionBioNodeParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionBioNodeChildrenQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionBioNodeBioQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionBioNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPageConnectionBioNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsAboutPageConnectionBioNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsAboutPageConnectionBioNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPageConnectionBioNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPageConnectionBioNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPageConnectionBioNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionBioNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionBioNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionBioNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionBioNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionBioQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsInputObject_2 {
  
  id?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsIdQueryString_2>;
  
  parent?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsParentQueryString_2>;
  
  tags?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsInternalInputObject_2>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsTagsInputObject_2>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsTagsTagNameQueryString_2>;
  
  content?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsTagsContentQueryString_2>;
  
  attributes?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsTagsContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsTagsAttributesInputObject_2 {
  
  property?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2>;
  
  content?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsTagsAttributesContentQueryString_2>;
  
  name?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsTagsAttributesNameQueryString_2>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPageConnectionSeoMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionSeoMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageConnectionUpdatedAtQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSort {
  
  fields: (Maybe<DatoCmsWorkConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsWorkConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsWork {
  
  id?: Maybe<DatoCmsWorkConnectionIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsWorkConnectionOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkConnectionInternalInputObject_2>;
  
  locale?: Maybe<DatoCmsWorkConnectionLocaleQueryString_2>;
  
  model?: Maybe<DatoCmsWorkConnectionModelInputObject_2>;
  
  title?: Maybe<DatoCmsWorkConnectionTitleQueryString_2>;
  
  slug?: Maybe<DatoCmsWorkConnectionSlugQueryString_2>;
  
  coverImage?: Maybe<DatoCmsWorkConnectionCoverImageInputObject_2>;
  
  excerptNode?: Maybe<DatoCmsWorkConnectionExcerptNodeInputObject_2>;
  
  excerpt?: Maybe<DatoCmsWorkConnectionExcerptQueryString_2>;
  
  gallery?: Maybe<DatoCmsWorkConnectionGalleryQueryList_2>;
  
  descriptionNode?: Maybe<DatoCmsWorkConnectionDescriptionNodeInputObject_2>;
  
  description?: Maybe<DatoCmsWorkConnectionDescriptionQueryString_2>;
  
  seoMetaTags?: Maybe<DatoCmsWorkConnectionSeoMetaTagsInputObject_2>;
  
  updatedAt?: Maybe<DatoCmsWorkConnectionUpdatedAtQueryString_2>;
  
  position?: Maybe<DatoCmsWorkConnectionPositionQueryInteger_2>;
}

export interface DatoCmsWorkConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionLocaleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionModelInputObject_2 {
  
  id?: Maybe<DatoCmsWorkConnectionModelIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsWorkConnectionModelOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkConnectionModelInternalInputObject_2>;
  
  name?: Maybe<DatoCmsWorkConnectionModelNameQueryString_2>;
  
  singleton?: Maybe<DatoCmsWorkConnectionModelSingletonQueryBoolean_2>;
  
  sortable?: Maybe<DatoCmsWorkConnectionModelSortableQueryBoolean_2>;
  
  apiKey?: Maybe<DatoCmsWorkConnectionModelApiKeyQueryString_2>;
  
  tree?: Maybe<DatoCmsWorkConnectionModelTreeQueryBoolean_2>;
  
  modularBlock?: Maybe<DatoCmsWorkConnectionModelModularBlockQueryBoolean_2>;
  
  draftModeActive?: Maybe<DatoCmsWorkConnectionModelDraftModeActiveQueryBoolean_2>;
  
  allLocalesRequired?: Maybe<DatoCmsWorkConnectionModelAllLocalesRequiredQueryBoolean_2>;
  
  collectionAppeareance?: Maybe<DatoCmsWorkConnectionModelCollectionAppeareanceQueryString_2>;
  
  hasSingletonItem?: Maybe<DatoCmsWorkConnectionModelHasSingletonItemQueryBoolean_2>;
}

export interface DatoCmsWorkConnectionModelIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionModelOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionModelInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkConnectionModelInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkConnectionModelInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkConnectionModelInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkConnectionModelInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionModelInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionModelInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionModelNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionModelSingletonQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkConnectionModelSortableQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkConnectionModelApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionModelTreeQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkConnectionModelModularBlockQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkConnectionModelDraftModeActiveQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkConnectionModelAllLocalesRequiredQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkConnectionModelCollectionAppeareanceQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionModelHasSingletonItemQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkConnectionTitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSlugQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionCoverImageInputObject_2 {
  
  id?: Maybe<DatoCmsWorkConnectionCoverImageIdQueryString_2>;
  
  parent?: Maybe<DatoCmsWorkConnectionCoverImageParentQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkConnectionCoverImageInternalInputObject_2>;
  
  format?: Maybe<DatoCmsWorkConnectionCoverImageFormatQueryString_2>;
  
  size?: Maybe<DatoCmsWorkConnectionCoverImageSizeQueryInteger_2>;
  
  width?: Maybe<DatoCmsWorkConnectionCoverImageWidthQueryInteger_2>;
  
  height?: Maybe<DatoCmsWorkConnectionCoverImageHeightQueryInteger_2>;
  
  url?: Maybe<DatoCmsWorkConnectionCoverImageUrlQueryString_2>;
}

export interface DatoCmsWorkConnectionCoverImageIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionCoverImageParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionCoverImageInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkConnectionCoverImageInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkConnectionCoverImageInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkConnectionCoverImageInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkConnectionCoverImageInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionCoverImageInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionCoverImageInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionCoverImageFormatQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionCoverImageSizeQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkConnectionCoverImageWidthQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkConnectionCoverImageHeightQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkConnectionCoverImageUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionExcerptNodeInputObject_2 {
  
  id?: Maybe<DatoCmsWorkConnectionExcerptNodeIdQueryString_2>;
  
  parent?: Maybe<DatoCmsWorkConnectionExcerptNodeParentQueryString_2>;
  
  excerpt?: Maybe<DatoCmsWorkConnectionExcerptNodeExcerptQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkConnectionExcerptNodeInternalInputObject_2>;
}

export interface DatoCmsWorkConnectionExcerptNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionExcerptNodeParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionExcerptNodeExcerptQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionExcerptNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkConnectionExcerptNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsWorkConnectionExcerptNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsWorkConnectionExcerptNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkConnectionExcerptNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkConnectionExcerptNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkConnectionExcerptNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionExcerptNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionExcerptNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionExcerptNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionExcerptNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionExcerptQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionGalleryQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsWorkConnectionGalleryInputObject_2>;
}

export interface DatoCmsWorkConnectionGalleryInputObject_2 {
  
  id?: Maybe<DatoCmsWorkConnectionGalleryIdQueryString_2>;
  
  parent?: Maybe<DatoCmsWorkConnectionGalleryParentQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkConnectionGalleryInternalInputObject_2>;
  
  format?: Maybe<DatoCmsWorkConnectionGalleryFormatQueryString_2>;
  
  size?: Maybe<DatoCmsWorkConnectionGallerySizeQueryInteger_2>;
  
  width?: Maybe<DatoCmsWorkConnectionGalleryWidthQueryInteger_2>;
  
  height?: Maybe<DatoCmsWorkConnectionGalleryHeightQueryInteger_2>;
  
  url?: Maybe<DatoCmsWorkConnectionGalleryUrlQueryString_2>;
}

export interface DatoCmsWorkConnectionGalleryIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionGalleryParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionGalleryInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkConnectionGalleryInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkConnectionGalleryInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkConnectionGalleryInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkConnectionGalleryInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionGalleryInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionGalleryInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionGalleryFormatQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionGallerySizeQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkConnectionGalleryWidthQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkConnectionGalleryHeightQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkConnectionGalleryUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionDescriptionNodeInputObject_2 {
  
  id?: Maybe<DatoCmsWorkConnectionDescriptionNodeIdQueryString_2>;
  
  parent?: Maybe<DatoCmsWorkConnectionDescriptionNodeParentQueryString_2>;
  
  children?: Maybe<DatoCmsWorkConnectionDescriptionNodeChildrenQueryList_2>;
  
  description?: Maybe<DatoCmsWorkConnectionDescriptionNodeDescriptionQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkConnectionDescriptionNodeInternalInputObject_2>;
}

export interface DatoCmsWorkConnectionDescriptionNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionDescriptionNodeParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionDescriptionNodeChildrenQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionDescriptionNodeDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionDescriptionNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkConnectionDescriptionNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsWorkConnectionDescriptionNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsWorkConnectionDescriptionNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkConnectionDescriptionNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkConnectionDescriptionNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkConnectionDescriptionNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionDescriptionNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionDescriptionNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionDescriptionNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionDescriptionNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsInputObject_2 {
  
  id?: Maybe<DatoCmsWorkConnectionSeoMetaTagsIdQueryString_2>;
  
  parent?: Maybe<DatoCmsWorkConnectionSeoMetaTagsParentQueryString_2>;
  
  tags?: Maybe<DatoCmsWorkConnectionSeoMetaTagsTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsWorkConnectionSeoMetaTagsInternalInputObject_2>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsWorkConnectionSeoMetaTagsTagsInputObject_2>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsWorkConnectionSeoMetaTagsTagsTagNameQueryString_2>;
  
  content?: Maybe<DatoCmsWorkConnectionSeoMetaTagsTagsContentQueryString_2>;
  
  attributes?: Maybe<DatoCmsWorkConnectionSeoMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsTagsContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsTagsAttributesInputObject_2 {
  
  property?: Maybe<DatoCmsWorkConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2>;
  
  content?: Maybe<DatoCmsWorkConnectionSeoMetaTagsTagsAttributesContentQueryString_2>;
  
  name?: Maybe<DatoCmsWorkConnectionSeoMetaTagsTagsAttributesNameQueryString_2>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkConnectionSeoMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkConnectionSeoMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkConnectionSeoMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionSeoMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionUpdatedAtQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkConnectionPositionQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsFaviconMetaTagsConnectionSort {
  
  fields: (Maybe<DatoCmsFaviconMetaTagsConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsFaviconMetaTagsConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsFaviconMetaTags {
  
  id?: Maybe<DatoCmsFaviconMetaTagsConnectionIdQueryString_2>;
  
  tags?: Maybe<DatoCmsFaviconMetaTagsConnectionTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsFaviconMetaTagsConnectionInternalInputObject_2>;
}

export interface DatoCmsFaviconMetaTagsConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsConnectionTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsFaviconMetaTagsConnectionTagsInputObject_2>;
}

export interface DatoCmsFaviconMetaTagsConnectionTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsFaviconMetaTagsConnectionTagsTagNameQueryString_2>;
  
  attributes?: Maybe<DatoCmsFaviconMetaTagsConnectionTagsAttributesInputObject_2>;
}

export interface DatoCmsFaviconMetaTagsConnectionTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsConnectionTagsAttributesInputObject_2 {
  
  rel?: Maybe<DatoCmsFaviconMetaTagsConnectionTagsAttributesRelQueryString_2>;
  
  sizes?: Maybe<DatoCmsFaviconMetaTagsConnectionTagsAttributesSizesQueryString_2>;
  
  href?: Maybe<DatoCmsFaviconMetaTagsConnectionTagsAttributesHrefQueryString_2>;
  
  name?: Maybe<DatoCmsFaviconMetaTagsConnectionTagsAttributesNameQueryString_2>;
  
  content?: Maybe<DatoCmsFaviconMetaTagsConnectionTagsAttributesContentQueryString_2>;
  
  type?: Maybe<DatoCmsFaviconMetaTagsConnectionTagsAttributesTypeQueryString_2>;
}

export interface DatoCmsFaviconMetaTagsConnectionTagsAttributesRelQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsConnectionTagsAttributesSizesQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsConnectionTagsAttributesHrefQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsConnectionTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsConnectionTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsConnectionTagsAttributesTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsFaviconMetaTagsConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsFaviconMetaTagsConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsFaviconMetaTagsConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsFaviconMetaTagsConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionSort {
  
  fields: (Maybe<DatoCmsSiteConnectionSortByFieldsEnum>)[];
  
  order?: DatoCmsSiteConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDatoCmsSite {
  
  id?: Maybe<DatoCmsSiteConnectionIdQueryString_2>;
  
  name?: Maybe<DatoCmsSiteConnectionNameQueryString_2>;
  
  locales?: Maybe<DatoCmsSiteConnectionLocalesQueryList_2>;
  
  theme?: Maybe<DatoCmsSiteConnectionThemeInputObject_2>;
  
  internalDomain?: Maybe<DatoCmsSiteConnectionInternalDomainQueryString_2>;
  
  noIndex?: Maybe<DatoCmsSiteConnectionNoIndexQueryBoolean_2>;
  
  globalSeo?: Maybe<DatoCmsSiteConnectionGlobalSeoInputObject_2>;
  
  originalId?: Maybe<DatoCmsSiteConnectionOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsSiteConnectionInternalInputObject_2>;
  
  faviconMetaTags?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsInputObject_2>;
  
  locale?: Maybe<DatoCmsSiteConnectionLocaleQueryString_2>;
}

export interface DatoCmsSiteConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionLocalesQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionThemeInputObject_2 {
  
  primaryColor?: Maybe<DatoCmsSiteConnectionThemePrimaryColorInputObject_2>;
  
  lightColor?: Maybe<DatoCmsSiteConnectionThemeLightColorInputObject_2>;
  
  darkColor?: Maybe<DatoCmsSiteConnectionThemeDarkColorInputObject_2>;
  
  accentColor?: Maybe<DatoCmsSiteConnectionThemeAccentColorInputObject_2>;
}

export interface DatoCmsSiteConnectionThemePrimaryColorInputObject_2 {
  
  red?: Maybe<DatoCmsSiteConnectionThemePrimaryColorRedQueryInteger_2>;
  
  blue?: Maybe<DatoCmsSiteConnectionThemePrimaryColorBlueQueryInteger_2>;
  
  alpha?: Maybe<DatoCmsSiteConnectionThemePrimaryColorAlphaQueryInteger_2>;
  
  green?: Maybe<DatoCmsSiteConnectionThemePrimaryColorGreenQueryInteger_2>;
}

export interface DatoCmsSiteConnectionThemePrimaryColorRedQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemePrimaryColorBlueQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemePrimaryColorAlphaQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemePrimaryColorGreenQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeLightColorInputObject_2 {
  
  red?: Maybe<DatoCmsSiteConnectionThemeLightColorRedQueryInteger_2>;
  
  blue?: Maybe<DatoCmsSiteConnectionThemeLightColorBlueQueryInteger_2>;
  
  alpha?: Maybe<DatoCmsSiteConnectionThemeLightColorAlphaQueryInteger_2>;
  
  green?: Maybe<DatoCmsSiteConnectionThemeLightColorGreenQueryInteger_2>;
}

export interface DatoCmsSiteConnectionThemeLightColorRedQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeLightColorBlueQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeLightColorAlphaQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeLightColorGreenQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeDarkColorInputObject_2 {
  
  red?: Maybe<DatoCmsSiteConnectionThemeDarkColorRedQueryInteger_2>;
  
  blue?: Maybe<DatoCmsSiteConnectionThemeDarkColorBlueQueryInteger_2>;
  
  alpha?: Maybe<DatoCmsSiteConnectionThemeDarkColorAlphaQueryInteger_2>;
  
  green?: Maybe<DatoCmsSiteConnectionThemeDarkColorGreenQueryInteger_2>;
}

export interface DatoCmsSiteConnectionThemeDarkColorRedQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeDarkColorBlueQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeDarkColorAlphaQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeDarkColorGreenQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeAccentColorInputObject_2 {
  
  red?: Maybe<DatoCmsSiteConnectionThemeAccentColorRedQueryInteger_2>;
  
  blue?: Maybe<DatoCmsSiteConnectionThemeAccentColorBlueQueryInteger_2>;
  
  alpha?: Maybe<DatoCmsSiteConnectionThemeAccentColorAlphaQueryInteger_2>;
  
  green?: Maybe<DatoCmsSiteConnectionThemeAccentColorGreenQueryInteger_2>;
}

export interface DatoCmsSiteConnectionThemeAccentColorRedQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeAccentColorBlueQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeAccentColorAlphaQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionThemeAccentColorGreenQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionInternalDomainQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionNoIndexQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoInputObject_2 {
  
  siteName?: Maybe<DatoCmsSiteConnectionGlobalSeoSiteNameQueryString_2>;
  
  titleSuffix?: Maybe<DatoCmsSiteConnectionGlobalSeoTitleSuffixQueryString_2>;
  
  facebookPageUrl?: Maybe<DatoCmsSiteConnectionGlobalSeoFacebookPageUrlQueryString_2>;
  
  twitterAccount?: Maybe<DatoCmsSiteConnectionGlobalSeoTwitterAccountQueryString_2>;
  
  fallbackSeo?: Maybe<DatoCmsSiteConnectionGlobalSeoFallbackSeoInputObject_2>;
}

export interface DatoCmsSiteConnectionGlobalSeoSiteNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoTitleSuffixQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoFacebookPageUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoTwitterAccountQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoFallbackSeoInputObject_2 {
  
  title?: Maybe<DatoCmsSiteConnectionGlobalSeoFallbackSeoTitleQueryString_2>;
  
  description?: Maybe<DatoCmsSiteConnectionGlobalSeoFallbackSeoDescriptionQueryString_2>;
  
  twitterCard?: Maybe<DatoCmsSiteConnectionGlobalSeoFallbackSeoTwitterCardQueryString_2>;
  
  image?: Maybe<DatoCmsSiteConnectionGlobalSeoFallbackSeoImageInputObject_2>;
}

export interface DatoCmsSiteConnectionGlobalSeoFallbackSeoTitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoFallbackSeoDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoFallbackSeoTwitterCardQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoFallbackSeoImageInputObject_2 {
  
  format?: Maybe<DatoCmsSiteConnectionGlobalSeoFallbackSeoImageFormatQueryString_2>;
  
  size?: Maybe<DatoCmsSiteConnectionGlobalSeoFallbackSeoImageSizeQueryInteger_2>;
  
  width?: Maybe<DatoCmsSiteConnectionGlobalSeoFallbackSeoImageWidthQueryInteger_2>;
  
  height?: Maybe<DatoCmsSiteConnectionGlobalSeoFallbackSeoImageHeightQueryInteger_2>;
  
  url?: Maybe<DatoCmsSiteConnectionGlobalSeoFallbackSeoImageUrlQueryString_2>;
}

export interface DatoCmsSiteConnectionGlobalSeoFallbackSeoImageFormatQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoFallbackSeoImageSizeQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoFallbackSeoImageWidthQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoFallbackSeoImageHeightQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteConnectionGlobalSeoFallbackSeoImageUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSiteConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSiteConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSiteConnectionInternalOwnerQueryString_2>;
}

export interface DatoCmsSiteConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsInputObject_2 {
  
  id?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsIdQueryString_2>;
  
  parent?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsParentQueryString_2>;
  
  tags?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsInternalInputObject_2>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsTagsInputObject_2>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsTagsTagNameQueryString_2>;
  
  attributes?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesInputObject_2 {
  
  rel?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesRelQueryString_2>;
  
  sizes?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesSizesQueryString_2>;
  
  href?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesHrefQueryString_2>;
  
  name?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesNameQueryString_2>;
  
  content?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesContentQueryString_2>;
  
  type?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesTypeQueryString_2>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesRelQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesSizesQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesHrefQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsTagsAttributesTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSiteConnectionFaviconMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionFaviconMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteConnectionLocaleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionSort {
  
  fields: (Maybe<MarkdownRemarkConnectionSortByFieldsEnum>)[];
  
  order?: MarkdownRemarkConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
  
  id?: Maybe<MarkdownRemarkConnectionIdQueryString_2>;
  
  internal?: Maybe<MarkdownRemarkConnectionInternalInputObject_2>;
  
  frontmatter?: Maybe<MarkdownRemarkConnectionFrontmatterInputObject_2>;
  
  rawMarkdownBody?: Maybe<MarkdownRemarkConnectionRawMarkdownBodyQueryString_2>;
  
  html?: Maybe<HtmlQueryString_4>;
  
  excerpt?: Maybe<ExcerptQueryString_4>;
  
  headings?: Maybe<HeadingsQueryList_4>;
  
  timeToRead?: Maybe<TimeToReadQueryInt_4>;
  
  tableOfContents?: Maybe<TableOfContentsQueryString_4>;
  
  wordCount?: Maybe<WordCountTypeName_4>;
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
  
  content?: Maybe<MarkdownRemarkConnectionInternalContentQueryString_2>;
  
  type?: Maybe<MarkdownRemarkConnectionInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<MarkdownRemarkConnectionInternalContentDigestQueryString_2>;
  
  owner?: Maybe<MarkdownRemarkConnectionInternalOwnerQueryString_2>;
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
  
  title?: Maybe<MarkdownRemarkConnectionFrontmatterTitleQueryString_2>;
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HtmlQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ExcerptQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsQueryList_4 {
  
  elemMatch?: Maybe<HeadingsListElemTypeName_4>;
}

export interface HeadingsListElemTypeName_4 {
  
  value?: Maybe<HeadingsListElemValueQueryString_4>;
  
  depth?: Maybe<HeadingsListElemDepthQueryInt_4>;
}

export interface HeadingsListElemValueQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsListElemDepthQueryInt_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TimeToReadQueryInt_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TableOfContentsQueryString_4 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface WordCountTypeName_4 {
  
  paragraphs?: Maybe<WordCountParagraphsQueryInt_4>;
  
  sentences?: Maybe<WordCountSentencesQueryInt_4>;
  
  words?: Maybe<WordCountWordsQueryInt_4>;
}

export interface WordCountParagraphsQueryInt_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountSentencesQueryInt_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountWordsQueryInt_4 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageJsonNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalComponentNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePathQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentChunkNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextInputObject {
  
  slug?: Maybe<SitePageContextSlugQueryString>;
}

export interface SitePageContextSlugQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInputObject {
  
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>;
  
  id?: Maybe<SitePagePluginCreatorIdQueryString>;
  
  name?: Maybe<SitePagePluginCreatorNameQueryString>;
  
  version?: Maybe<SitePagePluginCreatorVersionQueryString>;
  
  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>;
  
  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>;
  
  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>;
  
  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>;
  
  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>;
  
  internal?: Maybe<SitePagePluginCreatorInternalInputObject>;
}

export interface SitePagePluginCreatorResolveQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorIdQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorVersionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  
  apiToken?: Maybe<SitePagePluginCreatorPluginOptionsApiTokenQueryString>;
  
  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>;
  
  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>;
}

export interface SitePagePluginCreatorPluginOptionsApiTokenQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>;
  
  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>;
  
  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>;
  
  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>;
  
  author?: Maybe<SitePagePluginCreatorPackageJsonAuthorQueryString>;
  
  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>;
  
  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>;
  
  devDependencies?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesQueryList>;
  
  peerDependencies?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesQueryList>;
  
  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>;
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>;
  
  version?: Maybe<SitePagePluginCreatorPackageJsonDependenciesVersionQueryString>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>;
  
  version?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesInputObject>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>;
  
  version?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalInputObject {
  
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>;
  
  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>;
  
  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>;
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentPathQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalInputObject_2 {
  
  type?: Maybe<SitePageInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>;
  
  description?: Maybe<SitePageInternalDescriptionQueryString>;
  
  owner?: Maybe<SitePageInternalOwnerQueryString_2>;
}

export interface SitePageInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalDescriptionQueryString {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginResolveQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginVersionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsInputObject_2 {
  
  apiToken?: Maybe<SitePluginPluginOptionsApiTokenQueryString_2>;
  
  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>;
  
  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>;
}

export interface SitePluginPluginOptionsApiTokenQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginNodeApIsQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginSsrApIsQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginFilepathQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonInputObject_2 {
  
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>;
  
  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>;
  
  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>;
  
  main?: Maybe<SitePluginPackageJsonMainQueryString_2>;
  
  author?: Maybe<SitePluginPackageJsonAuthorQueryString_2>;
  
  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>;
  
  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>;
  
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>;
  
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>;
  
  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginPackageJsonNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonMainQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>;
  
  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>;
  
  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>;
  
  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalInputObject_2 {
  
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>;
  
  type?: Maybe<SitePluginInternalTypeQueryString_2>;
  
  owner?: Maybe<SitePluginInternalOwnerQueryString_2>;
}

export interface SitePluginInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataInputObject_2 {
  
  title?: Maybe<SiteSiteMetadataTitleQueryString_2>;
}

export interface SiteSiteMetadataTitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePortQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteHostQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePathPrefixQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePolyfillQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SiteBuildTimeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalInputObject_2 {
  
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>;
  
  type?: Maybe<SiteInternalTypeQueryString_2>;
  
  owner?: Maybe<SiteInternalOwnerQueryString_2>;
}

export interface SiteInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldInternalInputObject_2 {
  
  type?: Maybe<DatoCmsFieldInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsFieldInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsFieldInternalOwnerQueryString_2>;
}

export interface DatoCmsFieldInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldLabelQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldFieldTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldLocalizedQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsFieldValidatorsInputObject_2 {
  
  enum?: Maybe<DatoCmsFieldValidatorsEnumInputObject_2>;
  
  slugTitleField?: Maybe<DatoCmsFieldValidatorsSlugTitleFieldInputObject_2>;
  
  extension?: Maybe<DatoCmsFieldValidatorsExtensionInputObject_2>;
}

export interface DatoCmsFieldValidatorsEnumInputObject_2 {
  
  values?: Maybe<DatoCmsFieldValidatorsEnumValuesQueryList_2>;
}

export interface DatoCmsFieldValidatorsEnumValuesQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldValidatorsSlugTitleFieldInputObject_2 {
  
  titleFieldId?: Maybe<DatoCmsFieldValidatorsSlugTitleFieldTitleFieldIdQueryString_2>;
}

export interface DatoCmsFieldValidatorsSlugTitleFieldTitleFieldIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldValidatorsExtensionInputObject_2 {
  
  predefinedList?: Maybe<DatoCmsFieldValidatorsExtensionPredefinedListQueryString_2>;
}

export interface DatoCmsFieldValidatorsExtensionPredefinedListQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldPositionQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsFieldAppeareanceInputObject_2 {
  
  editor?: Maybe<DatoCmsFieldAppeareanceEditorQueryString_2>;
  
  parameters?: Maybe<DatoCmsFieldAppeareanceParametersInputObject_2>;
  
  type?: Maybe<DatoCmsFieldAppeareanceTypeQueryString_2>;
}

export interface DatoCmsFieldAppeareanceEditorQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldAppeareanceParametersInputObject_2 {
  
  toolbar?: Maybe<DatoCmsFieldAppeareanceParametersToolbarQueryList_2>;
  
  heading?: Maybe<DatoCmsFieldAppeareanceParametersHeadingQueryBoolean_2>;
}

export interface DatoCmsFieldAppeareanceParametersToolbarQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFieldAppeareanceParametersHeadingQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsFieldAppeareanceTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelInternalInputObject_2 {
  
  type?: Maybe<DatoCmsModelInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsModelInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsModelInternalOwnerQueryString_2>;
}

export interface DatoCmsModelInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelSingletonQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelSortableQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelTreeQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelModularBlockQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelDraftModeActiveQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelAllLocalesRequiredQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelCollectionAppeareanceQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelHasSingletonItemQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelFieldsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsModelFieldsInputObject_2>;
}

export interface DatoCmsModelFieldsInputObject_2 {
  
  id?: Maybe<DatoCmsModelFieldsIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsModelFieldsOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsModelFieldsInternalInputObject_2>;
  
  label?: Maybe<DatoCmsModelFieldsLabelQueryString_2>;
  
  fieldType?: Maybe<DatoCmsModelFieldsFieldTypeQueryString_2>;
  
  apiKey?: Maybe<DatoCmsModelFieldsApiKeyQueryString_2>;
  
  localized?: Maybe<DatoCmsModelFieldsLocalizedQueryBoolean_2>;
  
  validators?: Maybe<DatoCmsModelFieldsValidatorsInputObject_2>;
  
  position?: Maybe<DatoCmsModelFieldsPositionQueryInteger_2>;
  
  appeareance?: Maybe<DatoCmsModelFieldsAppeareanceInputObject_2>;
}

export interface DatoCmsModelFieldsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsModelFieldsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsModelFieldsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsModelFieldsInternalOwnerQueryString_2>;
}

export interface DatoCmsModelFieldsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsLabelQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsFieldTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsLocalizedQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelFieldsValidatorsInputObject_2 {
  
  enum?: Maybe<DatoCmsModelFieldsValidatorsEnumInputObject_2>;
  
  slugTitleField?: Maybe<DatoCmsModelFieldsValidatorsSlugTitleFieldInputObject_2>;
  
  extension?: Maybe<DatoCmsModelFieldsValidatorsExtensionInputObject_2>;
}

export interface DatoCmsModelFieldsValidatorsEnumInputObject_2 {
  
  values?: Maybe<DatoCmsModelFieldsValidatorsEnumValuesQueryList_2>;
}

export interface DatoCmsModelFieldsValidatorsEnumValuesQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsValidatorsSlugTitleFieldInputObject_2 {
  
  titleFieldId?: Maybe<DatoCmsModelFieldsValidatorsSlugTitleFieldTitleFieldIdQueryString_2>;
}

export interface DatoCmsModelFieldsValidatorsSlugTitleFieldTitleFieldIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsValidatorsExtensionInputObject_2 {
  
  predefinedList?: Maybe<DatoCmsModelFieldsValidatorsExtensionPredefinedListQueryString_2>;
}

export interface DatoCmsModelFieldsValidatorsExtensionPredefinedListQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsPositionQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsModelFieldsAppeareanceInputObject_2 {
  
  editor?: Maybe<DatoCmsModelFieldsAppeareanceEditorQueryString_2>;
  
  parameters?: Maybe<DatoCmsModelFieldsAppeareanceParametersInputObject_2>;
  
  type?: Maybe<DatoCmsModelFieldsAppeareanceTypeQueryString_2>;
}

export interface DatoCmsModelFieldsAppeareanceEditorQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsAppeareanceParametersInputObject_2 {
  
  toolbar?: Maybe<DatoCmsModelFieldsAppeareanceParametersToolbarQueryList_2>;
  
  heading?: Maybe<DatoCmsModelFieldsAppeareanceParametersHeadingQueryBoolean_2>;
}

export interface DatoCmsModelFieldsAppeareanceParametersToolbarQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsModelFieldsAppeareanceParametersHeadingQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsModelFieldsAppeareanceTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeIntroTextQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsHomeIntroTextTextNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsHomeIntroTextTextNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsHomeIntroTextTextNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsHomeIntroTextTextNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsHomeIntroTextTextNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsHomeIntroTextTextNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextTextNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsSeoMetaTagsTagsInputObject_2>;
}

export interface DatoCmsSeoMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsSeoMetaTagsTagsTagNameQueryString_2>;
  
  content?: Maybe<DatoCmsSeoMetaTagsTagsContentQueryString_2>;
  
  attributes?: Maybe<DatoCmsSeoMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsSeoMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsTagsContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsTagsAttributesInputObject_2 {
  
  property?: Maybe<DatoCmsSeoMetaTagsTagsAttributesPropertyQueryString_2>;
  
  content?: Maybe<DatoCmsSeoMetaTagsTagsAttributesContentQueryString_2>;
  
  name?: Maybe<DatoCmsSeoMetaTagsTagsAttributesNameQueryString_2>;
}

export interface DatoCmsSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSeoMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSeoMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSeoMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsSeoMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSeoMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAssetInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAssetInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAssetInternalOwnerQueryString_2>;
}

export interface DatoCmsAssetInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetFormatQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAssetSizeQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAssetWidthQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAssetHeightQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAssetUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTypeName_3 {
  
  base64?: Maybe<ResolutionsBase64QueryString_3>;
  
  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_3>;
  
  width?: Maybe<ResolutionsWidthQueryFloat_3>;
  
  height?: Maybe<ResolutionsHeightQueryFloat_3>;
  
  src?: Maybe<ResolutionsSrcQueryString_3>;
  
  srcSet?: Maybe<ResolutionsSrcSetQueryString_3>;
}

export interface ResolutionsBase64QueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsAspectRatioQueryFloat_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsWidthQueryFloat_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsHeightQueryFloat_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsSrcQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTypeName_3 {
  
  base64?: Maybe<SizesBase64QueryString_3>;
  
  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_3>;
  
  src?: Maybe<SizesSrcQueryString_3>;
  
  srcSet?: Maybe<SizesSrcSetQueryString_3>;
  
  sizes?: Maybe<SizesSizesQueryString_3>;
}

export interface SizesBase64QueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesAspectRatioQueryFloat_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesSrcQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSizesQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface InlineSvgQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTypeName_3 {
  
  base64?: Maybe<FluidBase64QueryString_3>;
  
  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_3>;
  
  src?: Maybe<FluidSrcQueryString_3>;
  
  srcSet?: Maybe<FluidSrcSetQueryString_3>;
  
  sizes?: Maybe<FluidSizesQueryString_3>;
}

export interface FluidBase64QueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidAspectRatioQueryFloat_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidSrcQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSizesQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTypeName_3 {
  
  base64?: Maybe<FixedBase64QueryString_3>;
  
  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_3>;
  
  width?: Maybe<FixedWidthQueryFloat_3>;
  
  height?: Maybe<FixedHeightQueryFloat_3>;
  
  src?: Maybe<FixedSrcQueryString_3>;
  
  srcSet?: Maybe<FixedSrcSetQueryString_3>;
}

export interface FixedBase64QueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedAspectRatioQueryFloat_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedWidthQueryFloat_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedHeightQueryFloat_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedSrcQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeBioQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPageBioTextNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsAboutPageBioTextNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsAboutPageBioTextNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPageBioTextNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPageBioTextNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPageBioTextNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioTextNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeExcerptQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkExcerptTextNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsWorkExcerptTextNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsWorkExcerptTextNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkExcerptTextNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkExcerptTextNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkExcerptTextNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptTextNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkDescriptionTextNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsWorkDescriptionTextNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsWorkDescriptionTextNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkDescriptionTextNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkDescriptionTextNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkDescriptionTextNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionTextNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsHomeInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsHomeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsHomeInternalOwnerQueryString_2>;
}

export interface DatoCmsHomeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeLocaleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeModelInputObject_2 {
  
  id?: Maybe<DatoCmsHomeModelIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsHomeModelOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsHomeModelInternalInputObject_2>;
  
  name?: Maybe<DatoCmsHomeModelNameQueryString_2>;
  
  singleton?: Maybe<DatoCmsHomeModelSingletonQueryBoolean_2>;
  
  sortable?: Maybe<DatoCmsHomeModelSortableQueryBoolean_2>;
  
  apiKey?: Maybe<DatoCmsHomeModelApiKeyQueryString_2>;
  
  tree?: Maybe<DatoCmsHomeModelTreeQueryBoolean_2>;
  
  modularBlock?: Maybe<DatoCmsHomeModelModularBlockQueryBoolean_2>;
  
  draftModeActive?: Maybe<DatoCmsHomeModelDraftModeActiveQueryBoolean_2>;
  
  allLocalesRequired?: Maybe<DatoCmsHomeModelAllLocalesRequiredQueryBoolean_2>;
  
  collectionAppeareance?: Maybe<DatoCmsHomeModelCollectionAppeareanceQueryString_2>;
  
  hasSingletonItem?: Maybe<DatoCmsHomeModelHasSingletonItemQueryBoolean_2>;
}

export interface DatoCmsHomeModelIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeModelOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeModelInternalInputObject_2 {
  
  type?: Maybe<DatoCmsHomeModelInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsHomeModelInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsHomeModelInternalOwnerQueryString_2>;
}

export interface DatoCmsHomeModelInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeModelInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeModelInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeModelNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeModelSingletonQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeModelSortableQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeModelApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeModelTreeQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeModelModularBlockQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeModelDraftModeActiveQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeModelAllLocalesRequiredQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeModelCollectionAppeareanceQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeModelHasSingletonItemQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsHomeIntroTextNodeInputObject_2 {
  
  id?: Maybe<DatoCmsHomeIntroTextNodeIdQueryString_2>;
  
  parent?: Maybe<DatoCmsHomeIntroTextNodeParentQueryString_2>;
  
  children?: Maybe<DatoCmsHomeIntroTextNodeChildrenQueryList_2>;
  
  introText?: Maybe<DatoCmsHomeIntroTextNodeIntroTextQueryString_2>;
  
  internal?: Maybe<DatoCmsHomeIntroTextNodeInternalInputObject_2>;
}

export interface DatoCmsHomeIntroTextNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextNodeParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextNodeChildrenQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextNodeIntroTextQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsHomeIntroTextNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsHomeIntroTextNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsHomeIntroTextNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsHomeIntroTextNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsHomeIntroTextNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsHomeIntroTextNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeIntroTextQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeCopyrightQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoSettingsInputObject_2 {
  
  title?: Maybe<DatoCmsHomeSeoSettingsTitleQueryString_2>;
  
  description?: Maybe<DatoCmsHomeSeoSettingsDescriptionQueryString_2>;
  
  twitterCard?: Maybe<DatoCmsHomeSeoSettingsTwitterCardQueryString_2>;
}

export interface DatoCmsHomeSeoSettingsTitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoSettingsDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoSettingsTwitterCardQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoMetaTagsInputObject_2 {
  
  id?: Maybe<DatoCmsHomeSeoMetaTagsIdQueryString_2>;
  
  parent?: Maybe<DatoCmsHomeSeoMetaTagsParentQueryString_2>;
  
  tags?: Maybe<DatoCmsHomeSeoMetaTagsTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsHomeSeoMetaTagsInternalInputObject_2>;
}

export interface DatoCmsHomeSeoMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoMetaTagsParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsHomeSeoMetaTagsTagsInputObject_2>;
}

export interface DatoCmsHomeSeoMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsHomeSeoMetaTagsTagsTagNameQueryString_2>;
  
  content?: Maybe<DatoCmsHomeSeoMetaTagsTagsContentQueryString_2>;
  
  attributes?: Maybe<DatoCmsHomeSeoMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsHomeSeoMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoMetaTagsTagsContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoMetaTagsTagsAttributesInputObject_2 {
  
  property?: Maybe<DatoCmsHomeSeoMetaTagsTagsAttributesPropertyQueryString_2>;
  
  content?: Maybe<DatoCmsHomeSeoMetaTagsTagsAttributesContentQueryString_2>;
  
  name?: Maybe<DatoCmsHomeSeoMetaTagsTagsAttributesNameQueryString_2>;
}

export interface DatoCmsHomeSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsHomeSeoMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsHomeSeoMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsHomeSeoMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsHomeSeoMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeSeoMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsHomeUpdatedAtQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSocialProfileInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSocialProfileInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSocialProfileInternalOwnerQueryString_2>;
}

export interface DatoCmsSocialProfileInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileLocaleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileModelInputObject_2 {
  
  id?: Maybe<DatoCmsSocialProfileModelIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsSocialProfileModelOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsSocialProfileModelInternalInputObject_2>;
  
  name?: Maybe<DatoCmsSocialProfileModelNameQueryString_2>;
  
  singleton?: Maybe<DatoCmsSocialProfileModelSingletonQueryBoolean_2>;
  
  sortable?: Maybe<DatoCmsSocialProfileModelSortableQueryBoolean_2>;
  
  apiKey?: Maybe<DatoCmsSocialProfileModelApiKeyQueryString_2>;
  
  tree?: Maybe<DatoCmsSocialProfileModelTreeQueryBoolean_2>;
  
  modularBlock?: Maybe<DatoCmsSocialProfileModelModularBlockQueryBoolean_2>;
  
  draftModeActive?: Maybe<DatoCmsSocialProfileModelDraftModeActiveQueryBoolean_2>;
  
  allLocalesRequired?: Maybe<DatoCmsSocialProfileModelAllLocalesRequiredQueryBoolean_2>;
  
  collectionAppeareance?: Maybe<DatoCmsSocialProfileModelCollectionAppeareanceQueryString_2>;
  
  hasSingletonItem?: Maybe<DatoCmsSocialProfileModelHasSingletonItemQueryBoolean_2>;
}

export interface DatoCmsSocialProfileModelIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileModelOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileModelInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSocialProfileModelInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSocialProfileModelInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSocialProfileModelInternalOwnerQueryString_2>;
}

export interface DatoCmsSocialProfileModelInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileModelInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileModelInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileModelNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileModelSingletonQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileModelSortableQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileModelApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileModelTreeQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileModelModularBlockQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileModelDraftModeActiveQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileModelAllLocalesRequiredQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileModelCollectionAppeareanceQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileModelHasSingletonItemQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSocialProfileProfileTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileSeoMetaTagsInputObject_2 {
  
  id?: Maybe<DatoCmsSocialProfileSeoMetaTagsIdQueryString_2>;
  
  parent?: Maybe<DatoCmsSocialProfileSeoMetaTagsParentQueryString_2>;
  
  tags?: Maybe<DatoCmsSocialProfileSeoMetaTagsTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsSocialProfileSeoMetaTagsInternalInputObject_2>;
}

export interface DatoCmsSocialProfileSeoMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileSeoMetaTagsParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileSeoMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsSocialProfileSeoMetaTagsTagsInputObject_2>;
}

export interface DatoCmsSocialProfileSeoMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsSocialProfileSeoMetaTagsTagsTagNameQueryString_2>;
  
  content?: Maybe<DatoCmsSocialProfileSeoMetaTagsTagsContentQueryString_2>;
  
  attributes?: Maybe<DatoCmsSocialProfileSeoMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsSocialProfileSeoMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileSeoMetaTagsTagsContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileSeoMetaTagsTagsAttributesInputObject_2 {
  
  property?: Maybe<DatoCmsSocialProfileSeoMetaTagsTagsAttributesPropertyQueryString_2>;
  
  content?: Maybe<DatoCmsSocialProfileSeoMetaTagsTagsAttributesContentQueryString_2>;
  
  name?: Maybe<DatoCmsSocialProfileSeoMetaTagsTagsAttributesNameQueryString_2>;
}

export interface DatoCmsSocialProfileSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileSeoMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileSeoMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileSeoMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSocialProfileSeoMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSocialProfileSeoMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSocialProfileSeoMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsSocialProfileSeoMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileSeoMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileSeoMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfileUpdatedAtQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSocialProfilePositionQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAboutPageIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPageInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPageInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPageInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPageInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageLocaleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageModelInputObject_2 {
  
  id?: Maybe<DatoCmsAboutPageModelIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsAboutPageModelOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsAboutPageModelInternalInputObject_2>;
  
  name?: Maybe<DatoCmsAboutPageModelNameQueryString_2>;
  
  singleton?: Maybe<DatoCmsAboutPageModelSingletonQueryBoolean_2>;
  
  sortable?: Maybe<DatoCmsAboutPageModelSortableQueryBoolean_2>;
  
  apiKey?: Maybe<DatoCmsAboutPageModelApiKeyQueryString_2>;
  
  tree?: Maybe<DatoCmsAboutPageModelTreeQueryBoolean_2>;
  
  modularBlock?: Maybe<DatoCmsAboutPageModelModularBlockQueryBoolean_2>;
  
  draftModeActive?: Maybe<DatoCmsAboutPageModelDraftModeActiveQueryBoolean_2>;
  
  allLocalesRequired?: Maybe<DatoCmsAboutPageModelAllLocalesRequiredQueryBoolean_2>;
  
  collectionAppeareance?: Maybe<DatoCmsAboutPageModelCollectionAppeareanceQueryString_2>;
  
  hasSingletonItem?: Maybe<DatoCmsAboutPageModelHasSingletonItemQueryBoolean_2>;
}

export interface DatoCmsAboutPageModelIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageModelOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageModelInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPageModelInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPageModelInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPageModelInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPageModelInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageModelInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageModelInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageModelNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageModelSingletonQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageModelSortableQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageModelApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageModelTreeQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageModelModularBlockQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageModelDraftModeActiveQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageModelAllLocalesRequiredQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageModelCollectionAppeareanceQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageModelHasSingletonItemQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsAboutPageTitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageSubtitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPagePhotoInputObject_2 {
  
  id?: Maybe<DatoCmsAboutPagePhotoIdQueryString_2>;
  
  parent?: Maybe<DatoCmsAboutPagePhotoParentQueryString_2>;
  
  internal?: Maybe<DatoCmsAboutPagePhotoInternalInputObject_2>;
  
  format?: Maybe<DatoCmsAboutPagePhotoFormatQueryString_2>;
  
  size?: Maybe<DatoCmsAboutPagePhotoSizeQueryInteger_2>;
  
  width?: Maybe<DatoCmsAboutPagePhotoWidthQueryInteger_2>;
  
  height?: Maybe<DatoCmsAboutPagePhotoHeightQueryInteger_2>;
  
  url?: Maybe<DatoCmsAboutPagePhotoUrlQueryString_2>;
}

export interface DatoCmsAboutPagePhotoIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPagePhotoParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPagePhotoInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPagePhotoInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPagePhotoInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPagePhotoInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPagePhotoInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPagePhotoInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPagePhotoInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPagePhotoFormatQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPagePhotoSizeQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAboutPagePhotoWidthQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAboutPagePhotoHeightQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsAboutPagePhotoUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioNodeInputObject_2 {
  
  id?: Maybe<DatoCmsAboutPageBioNodeIdQueryString_2>;
  
  parent?: Maybe<DatoCmsAboutPageBioNodeParentQueryString_2>;
  
  children?: Maybe<DatoCmsAboutPageBioNodeChildrenQueryList_2>;
  
  bio?: Maybe<DatoCmsAboutPageBioNodeBioQueryString_2>;
  
  internal?: Maybe<DatoCmsAboutPageBioNodeInternalInputObject_2>;
}

export interface DatoCmsAboutPageBioNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioNodeParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioNodeChildrenQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioNodeBioQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPageBioNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsAboutPageBioNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsAboutPageBioNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPageBioNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPageBioNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPageBioNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageBioQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageSeoMetaTagsInputObject_2 {
  
  id?: Maybe<DatoCmsAboutPageSeoMetaTagsIdQueryString_2>;
  
  parent?: Maybe<DatoCmsAboutPageSeoMetaTagsParentQueryString_2>;
  
  tags?: Maybe<DatoCmsAboutPageSeoMetaTagsTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsAboutPageSeoMetaTagsInternalInputObject_2>;
}

export interface DatoCmsAboutPageSeoMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageSeoMetaTagsParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageSeoMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsAboutPageSeoMetaTagsTagsInputObject_2>;
}

export interface DatoCmsAboutPageSeoMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsAboutPageSeoMetaTagsTagsTagNameQueryString_2>;
  
  content?: Maybe<DatoCmsAboutPageSeoMetaTagsTagsContentQueryString_2>;
  
  attributes?: Maybe<DatoCmsAboutPageSeoMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsAboutPageSeoMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageSeoMetaTagsTagsContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageSeoMetaTagsTagsAttributesInputObject_2 {
  
  property?: Maybe<DatoCmsAboutPageSeoMetaTagsTagsAttributesPropertyQueryString_2>;
  
  content?: Maybe<DatoCmsAboutPageSeoMetaTagsTagsAttributesContentQueryString_2>;
  
  name?: Maybe<DatoCmsAboutPageSeoMetaTagsTagsAttributesNameQueryString_2>;
}

export interface DatoCmsAboutPageSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageSeoMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageSeoMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageSeoMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsAboutPageSeoMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsAboutPageSeoMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsAboutPageSeoMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsAboutPageSeoMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageSeoMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageSeoMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsAboutPageUpdatedAtQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkLocaleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkModelInputObject_2 {
  
  id?: Maybe<DatoCmsWorkModelIdQueryString_2>;
  
  originalId?: Maybe<DatoCmsWorkModelOriginalIdQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkModelInternalInputObject_2>;
  
  name?: Maybe<DatoCmsWorkModelNameQueryString_2>;
  
  singleton?: Maybe<DatoCmsWorkModelSingletonQueryBoolean_2>;
  
  sortable?: Maybe<DatoCmsWorkModelSortableQueryBoolean_2>;
  
  apiKey?: Maybe<DatoCmsWorkModelApiKeyQueryString_2>;
  
  tree?: Maybe<DatoCmsWorkModelTreeQueryBoolean_2>;
  
  modularBlock?: Maybe<DatoCmsWorkModelModularBlockQueryBoolean_2>;
  
  draftModeActive?: Maybe<DatoCmsWorkModelDraftModeActiveQueryBoolean_2>;
  
  allLocalesRequired?: Maybe<DatoCmsWorkModelAllLocalesRequiredQueryBoolean_2>;
  
  collectionAppeareance?: Maybe<DatoCmsWorkModelCollectionAppeareanceQueryString_2>;
  
  hasSingletonItem?: Maybe<DatoCmsWorkModelHasSingletonItemQueryBoolean_2>;
}

export interface DatoCmsWorkModelIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkModelOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkModelInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkModelInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkModelInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkModelInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkModelInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkModelInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkModelInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkModelNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkModelSingletonQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkModelSortableQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkModelApiKeyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkModelTreeQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkModelModularBlockQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkModelDraftModeActiveQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkModelAllLocalesRequiredQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkModelCollectionAppeareanceQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkModelHasSingletonItemQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsWorkTitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkSlugQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkCoverImageInputObject_2 {
  
  id?: Maybe<DatoCmsWorkCoverImageIdQueryString_2>;
  
  parent?: Maybe<DatoCmsWorkCoverImageParentQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkCoverImageInternalInputObject_2>;
  
  format?: Maybe<DatoCmsWorkCoverImageFormatQueryString_2>;
  
  size?: Maybe<DatoCmsWorkCoverImageSizeQueryInteger_2>;
  
  width?: Maybe<DatoCmsWorkCoverImageWidthQueryInteger_2>;
  
  height?: Maybe<DatoCmsWorkCoverImageHeightQueryInteger_2>;
  
  url?: Maybe<DatoCmsWorkCoverImageUrlQueryString_2>;
}

export interface DatoCmsWorkCoverImageIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkCoverImageParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkCoverImageInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkCoverImageInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkCoverImageInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkCoverImageInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkCoverImageInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkCoverImageInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkCoverImageInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkCoverImageFormatQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkCoverImageSizeQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkCoverImageWidthQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkCoverImageHeightQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkCoverImageUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptNodeInputObject_2 {
  
  id?: Maybe<DatoCmsWorkExcerptNodeIdQueryString_2>;
  
  parent?: Maybe<DatoCmsWorkExcerptNodeParentQueryString_2>;
  
  excerpt?: Maybe<DatoCmsWorkExcerptNodeExcerptQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkExcerptNodeInternalInputObject_2>;
}

export interface DatoCmsWorkExcerptNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptNodeParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptNodeExcerptQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkExcerptNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsWorkExcerptNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsWorkExcerptNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkExcerptNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkExcerptNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkExcerptNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkExcerptQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkGalleryQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsWorkGalleryInputObject_2>;
}

export interface DatoCmsWorkGalleryInputObject_2 {
  
  id?: Maybe<DatoCmsWorkGalleryIdQueryString_2>;
  
  parent?: Maybe<DatoCmsWorkGalleryParentQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkGalleryInternalInputObject_2>;
  
  format?: Maybe<DatoCmsWorkGalleryFormatQueryString_2>;
  
  size?: Maybe<DatoCmsWorkGallerySizeQueryInteger_2>;
  
  width?: Maybe<DatoCmsWorkGalleryWidthQueryInteger_2>;
  
  height?: Maybe<DatoCmsWorkGalleryHeightQueryInteger_2>;
  
  url?: Maybe<DatoCmsWorkGalleryUrlQueryString_2>;
}

export interface DatoCmsWorkGalleryIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkGalleryParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkGalleryInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkGalleryInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkGalleryInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkGalleryInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkGalleryInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkGalleryInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkGalleryInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkGalleryFormatQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkGallerySizeQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkGalleryWidthQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkGalleryHeightQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsWorkGalleryUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionNodeInputObject_2 {
  
  id?: Maybe<DatoCmsWorkDescriptionNodeIdQueryString_2>;
  
  parent?: Maybe<DatoCmsWorkDescriptionNodeParentQueryString_2>;
  
  children?: Maybe<DatoCmsWorkDescriptionNodeChildrenQueryList_2>;
  
  description?: Maybe<DatoCmsWorkDescriptionNodeDescriptionQueryString_2>;
  
  internal?: Maybe<DatoCmsWorkDescriptionNodeInternalInputObject_2>;
}

export interface DatoCmsWorkDescriptionNodeIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionNodeParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionNodeChildrenQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionNodeDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionNodeInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkDescriptionNodeInternalTypeQueryString_2>;
  
  mediaType?: Maybe<DatoCmsWorkDescriptionNodeInternalMediaTypeQueryString_2>;
  
  content?: Maybe<DatoCmsWorkDescriptionNodeInternalContentQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkDescriptionNodeInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkDescriptionNodeInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkDescriptionNodeInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionNodeInternalMediaTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionNodeInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionNodeInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionNodeInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkSeoMetaTagsInputObject_2 {
  
  id?: Maybe<DatoCmsWorkSeoMetaTagsIdQueryString_2>;
  
  parent?: Maybe<DatoCmsWorkSeoMetaTagsParentQueryString_2>;
  
  tags?: Maybe<DatoCmsWorkSeoMetaTagsTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsWorkSeoMetaTagsInternalInputObject_2>;
}

export interface DatoCmsWorkSeoMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkSeoMetaTagsParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkSeoMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsWorkSeoMetaTagsTagsInputObject_2>;
}

export interface DatoCmsWorkSeoMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsWorkSeoMetaTagsTagsTagNameQueryString_2>;
  
  content?: Maybe<DatoCmsWorkSeoMetaTagsTagsContentQueryString_2>;
  
  attributes?: Maybe<DatoCmsWorkSeoMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsWorkSeoMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkSeoMetaTagsTagsContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkSeoMetaTagsTagsAttributesInputObject_2 {
  
  property?: Maybe<DatoCmsWorkSeoMetaTagsTagsAttributesPropertyQueryString_2>;
  
  content?: Maybe<DatoCmsWorkSeoMetaTagsTagsAttributesContentQueryString_2>;
  
  name?: Maybe<DatoCmsWorkSeoMetaTagsTagsAttributesNameQueryString_2>;
}

export interface DatoCmsWorkSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkSeoMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkSeoMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkSeoMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsWorkSeoMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsWorkSeoMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsWorkSeoMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsWorkSeoMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkSeoMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkSeoMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkUpdatedAtQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsWorkPositionQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsFaviconMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsFaviconMetaTagsTagsInputObject_2>;
}

export interface DatoCmsFaviconMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsFaviconMetaTagsTagsTagNameQueryString_2>;
  
  attributes?: Maybe<DatoCmsFaviconMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsFaviconMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsTagsAttributesInputObject_2 {
  
  rel?: Maybe<DatoCmsFaviconMetaTagsTagsAttributesRelQueryString_2>;
  
  sizes?: Maybe<DatoCmsFaviconMetaTagsTagsAttributesSizesQueryString_2>;
  
  href?: Maybe<DatoCmsFaviconMetaTagsTagsAttributesHrefQueryString_2>;
  
  name?: Maybe<DatoCmsFaviconMetaTagsTagsAttributesNameQueryString_2>;
  
  content?: Maybe<DatoCmsFaviconMetaTagsTagsAttributesContentQueryString_2>;
  
  type?: Maybe<DatoCmsFaviconMetaTagsTagsAttributesTypeQueryString_2>;
}

export interface DatoCmsFaviconMetaTagsTagsAttributesRelQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsTagsAttributesSizesQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsTagsAttributesHrefQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsTagsAttributesTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsFaviconMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsFaviconMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsFaviconMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsFaviconMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsFaviconMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteLocalesQueryList_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteThemeInputObject_2 {
  
  primaryColor?: Maybe<DatoCmsSiteThemePrimaryColorInputObject_2>;
  
  lightColor?: Maybe<DatoCmsSiteThemeLightColorInputObject_2>;
  
  darkColor?: Maybe<DatoCmsSiteThemeDarkColorInputObject_2>;
  
  accentColor?: Maybe<DatoCmsSiteThemeAccentColorInputObject_2>;
}

export interface DatoCmsSiteThemePrimaryColorInputObject_2 {
  
  red?: Maybe<DatoCmsSiteThemePrimaryColorRedQueryInteger_2>;
  
  blue?: Maybe<DatoCmsSiteThemePrimaryColorBlueQueryInteger_2>;
  
  alpha?: Maybe<DatoCmsSiteThemePrimaryColorAlphaQueryInteger_2>;
  
  green?: Maybe<DatoCmsSiteThemePrimaryColorGreenQueryInteger_2>;
}

export interface DatoCmsSiteThemePrimaryColorRedQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemePrimaryColorBlueQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemePrimaryColorAlphaQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemePrimaryColorGreenQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeLightColorInputObject_2 {
  
  red?: Maybe<DatoCmsSiteThemeLightColorRedQueryInteger_2>;
  
  blue?: Maybe<DatoCmsSiteThemeLightColorBlueQueryInteger_2>;
  
  alpha?: Maybe<DatoCmsSiteThemeLightColorAlphaQueryInteger_2>;
  
  green?: Maybe<DatoCmsSiteThemeLightColorGreenQueryInteger_2>;
}

export interface DatoCmsSiteThemeLightColorRedQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeLightColorBlueQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeLightColorAlphaQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeLightColorGreenQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeDarkColorInputObject_2 {
  
  red?: Maybe<DatoCmsSiteThemeDarkColorRedQueryInteger_2>;
  
  blue?: Maybe<DatoCmsSiteThemeDarkColorBlueQueryInteger_2>;
  
  alpha?: Maybe<DatoCmsSiteThemeDarkColorAlphaQueryInteger_2>;
  
  green?: Maybe<DatoCmsSiteThemeDarkColorGreenQueryInteger_2>;
}

export interface DatoCmsSiteThemeDarkColorRedQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeDarkColorBlueQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeDarkColorAlphaQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeDarkColorGreenQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeAccentColorInputObject_2 {
  
  red?: Maybe<DatoCmsSiteThemeAccentColorRedQueryInteger_2>;
  
  blue?: Maybe<DatoCmsSiteThemeAccentColorBlueQueryInteger_2>;
  
  alpha?: Maybe<DatoCmsSiteThemeAccentColorAlphaQueryInteger_2>;
  
  green?: Maybe<DatoCmsSiteThemeAccentColorGreenQueryInteger_2>;
}

export interface DatoCmsSiteThemeAccentColorRedQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeAccentColorBlueQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeAccentColorAlphaQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteThemeAccentColorGreenQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteInternalDomainQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteNoIndexQueryBoolean_2 {
  
  eq?: Maybe<boolean>;
  
  ne?: Maybe<boolean>;
  
  in?: Maybe<(Maybe<boolean>)[]>;
  
  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface DatoCmsSiteGlobalSeoInputObject_2 {
  
  siteName?: Maybe<DatoCmsSiteGlobalSeoSiteNameQueryString_2>;
  
  titleSuffix?: Maybe<DatoCmsSiteGlobalSeoTitleSuffixQueryString_2>;
  
  facebookPageUrl?: Maybe<DatoCmsSiteGlobalSeoFacebookPageUrlQueryString_2>;
  
  twitterAccount?: Maybe<DatoCmsSiteGlobalSeoTwitterAccountQueryString_2>;
  
  fallbackSeo?: Maybe<DatoCmsSiteGlobalSeoFallbackSeoInputObject_2>;
}

export interface DatoCmsSiteGlobalSeoSiteNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteGlobalSeoTitleSuffixQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteGlobalSeoFacebookPageUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteGlobalSeoTwitterAccountQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteGlobalSeoFallbackSeoInputObject_2 {
  
  title?: Maybe<DatoCmsSiteGlobalSeoFallbackSeoTitleQueryString_2>;
  
  description?: Maybe<DatoCmsSiteGlobalSeoFallbackSeoDescriptionQueryString_2>;
  
  twitterCard?: Maybe<DatoCmsSiteGlobalSeoFallbackSeoTwitterCardQueryString_2>;
  
  image?: Maybe<DatoCmsSiteGlobalSeoFallbackSeoImageInputObject_2>;
}

export interface DatoCmsSiteGlobalSeoFallbackSeoTitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteGlobalSeoFallbackSeoDescriptionQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteGlobalSeoFallbackSeoTwitterCardQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteGlobalSeoFallbackSeoImageInputObject_2 {
  
  format?: Maybe<DatoCmsSiteGlobalSeoFallbackSeoImageFormatQueryString_2>;
  
  size?: Maybe<DatoCmsSiteGlobalSeoFallbackSeoImageSizeQueryInteger_2>;
  
  width?: Maybe<DatoCmsSiteGlobalSeoFallbackSeoImageWidthQueryInteger_2>;
  
  height?: Maybe<DatoCmsSiteGlobalSeoFallbackSeoImageHeightQueryInteger_2>;
  
  url?: Maybe<DatoCmsSiteGlobalSeoFallbackSeoImageUrlQueryString_2>;
}

export interface DatoCmsSiteGlobalSeoFallbackSeoImageFormatQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteGlobalSeoFallbackSeoImageSizeQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteGlobalSeoFallbackSeoImageWidthQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteGlobalSeoFallbackSeoImageHeightQueryInteger_2 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DatoCmsSiteGlobalSeoFallbackSeoImageUrlQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteOriginalIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSiteInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSiteInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSiteInternalOwnerQueryString_2>;
}

export interface DatoCmsSiteInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsInputObject_2 {
  
  id?: Maybe<DatoCmsSiteFaviconMetaTagsIdQueryString_2>;
  
  parent?: Maybe<DatoCmsSiteFaviconMetaTagsParentQueryString_2>;
  
  tags?: Maybe<DatoCmsSiteFaviconMetaTagsTagsQueryList_2>;
  
  internal?: Maybe<DatoCmsSiteFaviconMetaTagsInternalInputObject_2>;
}

export interface DatoCmsSiteFaviconMetaTagsIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsParentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsTagsQueryList_2 {
  
  elemMatch?: Maybe<DatoCmsSiteFaviconMetaTagsTagsInputObject_2>;
}

export interface DatoCmsSiteFaviconMetaTagsTagsInputObject_2 {
  
  tagName?: Maybe<DatoCmsSiteFaviconMetaTagsTagsTagNameQueryString_2>;
  
  attributes?: Maybe<DatoCmsSiteFaviconMetaTagsTagsAttributesInputObject_2>;
}

export interface DatoCmsSiteFaviconMetaTagsTagsTagNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsTagsAttributesInputObject_2 {
  
  rel?: Maybe<DatoCmsSiteFaviconMetaTagsTagsAttributesRelQueryString_2>;
  
  sizes?: Maybe<DatoCmsSiteFaviconMetaTagsTagsAttributesSizesQueryString_2>;
  
  href?: Maybe<DatoCmsSiteFaviconMetaTagsTagsAttributesHrefQueryString_2>;
  
  name?: Maybe<DatoCmsSiteFaviconMetaTagsTagsAttributesNameQueryString_2>;
  
  content?: Maybe<DatoCmsSiteFaviconMetaTagsTagsAttributesContentQueryString_2>;
  
  type?: Maybe<DatoCmsSiteFaviconMetaTagsTagsAttributesTypeQueryString_2>;
}

export interface DatoCmsSiteFaviconMetaTagsTagsAttributesRelQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsTagsAttributesSizesQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsTagsAttributesHrefQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsTagsAttributesNameQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsTagsAttributesContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsTagsAttributesTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsInternalInputObject_2 {
  
  type?: Maybe<DatoCmsSiteFaviconMetaTagsInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<DatoCmsSiteFaviconMetaTagsInternalContentDigestQueryString_2>;
  
  owner?: Maybe<DatoCmsSiteFaviconMetaTagsInternalOwnerQueryString_2>;
}

export interface DatoCmsSiteFaviconMetaTagsInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteFaviconMetaTagsInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DatoCmsSiteLocaleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkIdQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalInputObject_2 {
  
  content?: Maybe<MarkdownRemarkInternalContentQueryString_2>;
  
  type?: Maybe<MarkdownRemarkInternalTypeQueryString_2>;
  
  contentDigest?: Maybe<MarkdownRemarkInternalContentDigestQueryString_2>;
  
  owner?: Maybe<MarkdownRemarkInternalOwnerQueryString_2>;
}

export interface MarkdownRemarkInternalContentQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
  
  title?: Maybe<MarkdownRemarkFrontmatterTitleQueryString_2>;
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HtmlQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ExcerptQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsQueryList_3 {
  
  elemMatch?: Maybe<HeadingsListElemTypeName_3>;
}

export interface HeadingsListElemTypeName_3 {
  
  value?: Maybe<HeadingsListElemValueQueryString_3>;
  
  depth?: Maybe<HeadingsListElemDepthQueryInt_3>;
}

export interface HeadingsListElemValueQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsListElemDepthQueryInt_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TimeToReadQueryInt_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TableOfContentsQueryString_3 {
  
  eq?: Maybe<string>;
  
  ne?: Maybe<string>;
  
  regex?: Maybe<string>;
  
  glob?: Maybe<string>;
  
  in?: Maybe<(Maybe<string>)[]>;
  
  nin?: Maybe<(Maybe<string>)[]>;
}

export interface WordCountTypeName_3 {
  
  paragraphs?: Maybe<WordCountParagraphsQueryInt_3>;
  
  sentences?: Maybe<WordCountSentencesQueryInt_3>;
  
  words?: Maybe<WordCountWordsQueryInt_3>;
}

export interface WordCountParagraphsQueryInt_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountSentencesQueryInt_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountWordsQueryInt_3 {
  
  eq?: Maybe<number>;
  
  ne?: Maybe<number>;
  
  gt?: Maybe<number>;
  
  gte?: Maybe<number>;
  
  lt?: Maybe<number>;
  
  lte?: Maybe<number>;
  
  in?: Maybe<(Maybe<number>)[]>;
  
  nin?: Maybe<(Maybe<number>)[]>;
}

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = "jsonName",
  InternalComponentName = "internalComponentName",
  Path = "path",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  ContextSlug = "context___slug",
  PluginCreatorNode = "pluginCreator___NODE",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
  Id = "id",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner",
}

export enum SitePageConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum SitePageDistinctEnum {
  JsonName = "jsonName",
  InternalComponentName = "internalComponentName",
  Path = "path",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  ContextSlug = "context___slug",
  PluginCreatorNode = "pluginCreator___NODE",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
  Id = "id",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner",
}

export enum SitePageGroupEnum {
  JsonName = "jsonName",
  InternalComponentName = "internalComponentName",
  Path = "path",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  ContextSlug = "context___slug",
  PluginCreatorNode = "pluginCreator___NODE",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
  Id = "id",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner",
}

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = "resolve",
  Id = "id",
  Name = "name",
  Version = "version",
  PluginOptionsApiToken = "pluginOptions___apiToken",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonKeywords = "packageJson___keywords",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner",
}

export enum SitePluginConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum SitePluginDistinctEnum {
  Resolve = "resolve",
  Id = "id",
  Name = "name",
  Version = "version",
  PluginOptionsApiToken = "pluginOptions___apiToken",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonKeywords = "packageJson___keywords",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner",
}

export enum SitePluginGroupEnum {
  Resolve = "resolve",
  Id = "id",
  Name = "name",
  Version = "version",
  PluginOptionsApiToken = "pluginOptions___apiToken",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonKeywords = "packageJson___keywords",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner",
}

export enum DatoCmsFieldConnectionSortByFieldsEnum {
  Id = "id",
  OriginalId = "originalId",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Label = "label",
  FieldType = "fieldType",
  ApiKey = "apiKey",
  Localized = "localized",
  ValidatorsEnumValues = "validators___enum___values",
  ValidatorsSlugTitleFieldTitleFieldId = "validators___slugTitleField___titleFieldId",
  ValidatorsExtensionPredefinedList = "validators___extension___predefinedList",
  Position = "position",
  AppeareanceEditor = "appeareance___editor",
  AppeareanceParametersToolbar = "appeareance___parameters___toolbar",
  AppeareanceParametersHeading = "appeareance___parameters___heading",
  AppeareanceType = "appeareance___type",
}

export enum DatoCmsFieldConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsFieldDistinctEnum {
  Id = "id",
  OriginalId = "originalId",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Label = "label",
  FieldType = "fieldType",
  ApiKey = "apiKey",
  Localized = "localized",
  ValidatorsEnumValues = "validators___enum___values",
  ValidatorsSlugTitleFieldTitleFieldId = "validators___slugTitleField___titleFieldId",
  ValidatorsExtensionPredefinedList = "validators___extension___predefinedList",
  Position = "position",
  AppeareanceEditor = "appeareance___editor",
  AppeareanceParametersToolbar = "appeareance___parameters___toolbar",
  AppeareanceParametersHeading = "appeareance___parameters___heading",
  AppeareanceType = "appeareance___type",
}

export enum DatoCmsFieldGroupEnum {
  Id = "id",
  OriginalId = "originalId",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Label = "label",
  FieldType = "fieldType",
  ApiKey = "apiKey",
  Localized = "localized",
  ValidatorsEnumValues = "validators___enum___values",
  ValidatorsSlugTitleFieldTitleFieldId = "validators___slugTitleField___titleFieldId",
  ValidatorsExtensionPredefinedList = "validators___extension___predefinedList",
  Position = "position",
  AppeareanceEditor = "appeareance___editor",
  AppeareanceParametersToolbar = "appeareance___parameters___toolbar",
  AppeareanceParametersHeading = "appeareance___parameters___heading",
  AppeareanceType = "appeareance___type",
}

export enum DatoCmsModelConnectionSortByFieldsEnum {
  Id = "id",
  OriginalId = "originalId",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Name = "name",
  Singleton = "singleton",
  Sortable = "sortable",
  ApiKey = "apiKey",
  Tree = "tree",
  ModularBlock = "modularBlock",
  DraftModeActive = "draftModeActive",
  AllLocalesRequired = "allLocalesRequired",
  CollectionAppeareance = "collectionAppeareance",
  HasSingletonItem = "hasSingletonItem",
  FieldsNode = "fields___NODE",
}

export enum DatoCmsModelConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsModelDistinctEnum {
  Id = "id",
  OriginalId = "originalId",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Name = "name",
  Singleton = "singleton",
  Sortable = "sortable",
  ApiKey = "apiKey",
  Tree = "tree",
  ModularBlock = "modularBlock",
  DraftModeActive = "draftModeActive",
  AllLocalesRequired = "allLocalesRequired",
  CollectionAppeareance = "collectionAppeareance",
  HasSingletonItem = "hasSingletonItem",
  FieldsNode = "fields___NODE",
}

export enum DatoCmsModelGroupEnum {
  Id = "id",
  OriginalId = "originalId",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Name = "name",
  Singleton = "singleton",
  Sortable = "sortable",
  ApiKey = "apiKey",
  Tree = "tree",
  ModularBlock = "modularBlock",
  DraftModeActive = "draftModeActive",
  AllLocalesRequired = "allLocalesRequired",
  CollectionAppeareance = "collectionAppeareance",
  HasSingletonItem = "hasSingletonItem",
  FieldsNode = "fields___NODE",
}

export enum DatoCmsHomeIntroTextTextNodeConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  IntroText = "introText",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsHomeIntroTextTextNodeConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum ExcerptFormats {
  Plain = "PLAIN",
  Html = "HTML",
}

export enum HeadingLevels {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export enum DatoCmsHomeIntroTextTextNodeDistinctEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  IntroText = "introText",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsHomeIntroTextTextNodeGroupEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  IntroText = "introText",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsSeoMetaTagsConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  Tags = "tags",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsSeoMetaTagsConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsSeoMetaTagsDistinctEnum {
  Id = "id",
  Parent = "parent",
  Tags = "tags",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsSeoMetaTagsGroupEnum {
  Id = "id",
  Parent = "parent",
  Tags = "tags",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsAssetConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Format = "format",
  Size = "size",
  Width = "width",
  Height = "height",
  Url = "url",
  ResolutionsBase64 = "resolutions___base64",
  ResolutionsAspectRatio = "resolutions___aspectRatio",
  ResolutionsWidth = "resolutions___width",
  ResolutionsHeight = "resolutions___height",
  ResolutionsSrc = "resolutions___src",
  ResolutionsSrcSet = "resolutions___srcSet",
  SizesBase64 = "sizes___base64",
  SizesAspectRatio = "sizes___aspectRatio",
  SizesSrc = "sizes___src",
  SizesSrcSet = "sizes___srcSet",
  SizesSizes = "sizes___sizes",
  InlineSvg = "inlineSvg",
  FluidBase64 = "fluid___base64",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSizes = "fluid___sizes",
  FixedBase64 = "fixed___base64",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedWidth = "fixed___width",
  FixedHeight = "fixed___height",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
}

export enum DatoCmsAssetConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsAssetDistinctEnum {
  Id = "id",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Format = "format",
  Size = "size",
  Width = "width",
  Height = "height",
  Url = "url",
}

export enum DatoCmsAssetGroupEnum {
  Id = "id",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Format = "format",
  Size = "size",
  Width = "width",
  Height = "height",
  Url = "url",
}

export enum DatoCmsAboutPageBioTextNodeConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  Bio = "bio",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsAboutPageBioTextNodeConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsAboutPageBioTextNodeDistinctEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  Bio = "bio",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsAboutPageBioTextNodeGroupEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  Bio = "bio",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsWorkExcerptTextNodeConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  Excerpt = "excerpt",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsWorkExcerptTextNodeConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsWorkExcerptTextNodeDistinctEnum {
  Id = "id",
  Parent = "parent",
  Excerpt = "excerpt",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsWorkExcerptTextNodeGroupEnum {
  Id = "id",
  Parent = "parent",
  Excerpt = "excerpt",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsWorkDescriptionTextNodeConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  Description = "description",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsWorkDescriptionTextNodeConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsWorkDescriptionTextNodeDistinctEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  Description = "description",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsWorkDescriptionTextNodeGroupEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  Description = "description",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsHomeConnectionSortByFieldsEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  IntroTextNodeNode = "introTextNode___NODE",
  IntroText = "introText",
  Copyright = "copyright",
  SeoSettingsTitle = "seoSettings___title",
  SeoSettingsDescription = "seoSettings___description",
  SeoSettingsTwitterCard = "seoSettings___twitterCard",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
}

export enum DatoCmsHomeConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsHomeDistinctEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  IntroTextNodeNode = "introTextNode___NODE",
  IntroText = "introText",
  Copyright = "copyright",
  SeoSettingsTitle = "seoSettings___title",
  SeoSettingsDescription = "seoSettings___description",
  SeoSettingsTwitterCard = "seoSettings___twitterCard",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
}

export enum DatoCmsHomeGroupEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  IntroTextNodeNode = "introTextNode___NODE",
  IntroText = "introText",
  Copyright = "copyright",
  SeoSettingsTitle = "seoSettings___title",
  SeoSettingsDescription = "seoSettings___description",
  SeoSettingsTwitterCard = "seoSettings___twitterCard",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
}

export enum DatoCmsSocialProfileConnectionSortByFieldsEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  ProfileType = "profileType",
  Url = "url",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
  Position = "position",
}

export enum DatoCmsSocialProfileConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsSocialProfileDistinctEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  ProfileType = "profileType",
  Url = "url",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
  Position = "position",
}

export enum DatoCmsSocialProfileGroupEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  ProfileType = "profileType",
  Url = "url",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
  Position = "position",
}

export enum DatoCmsAboutPageConnectionSortByFieldsEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  Title = "title",
  Subtitle = "subtitle",
  PhotoNode = "photo___NODE",
  BioNodeNode = "bioNode___NODE",
  Bio = "bio",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
}

export enum DatoCmsAboutPageConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsAboutPageDistinctEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  Title = "title",
  Subtitle = "subtitle",
  PhotoNode = "photo___NODE",
  BioNodeNode = "bioNode___NODE",
  Bio = "bio",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
}

export enum DatoCmsAboutPageGroupEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  Title = "title",
  Subtitle = "subtitle",
  PhotoNode = "photo___NODE",
  BioNodeNode = "bioNode___NODE",
  Bio = "bio",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
}

export enum DatoCmsWorkConnectionSortByFieldsEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  Title = "title",
  Slug = "slug",
  CoverImageNode = "coverImage___NODE",
  ExcerptNodeNode = "excerptNode___NODE",
  Excerpt = "excerpt",
  GalleryNode = "gallery___NODE",
  DescriptionNodeNode = "descriptionNode___NODE",
  Description = "description",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
  Position = "position",
}

export enum DatoCmsWorkConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsWorkDistinctEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  Title = "title",
  Slug = "slug",
  CoverImageNode = "coverImage___NODE",
  ExcerptNodeNode = "excerptNode___NODE",
  Excerpt = "excerpt",
  GalleryNode = "gallery___NODE",
  DescriptionNodeNode = "descriptionNode___NODE",
  Description = "description",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
  Position = "position",
}

export enum DatoCmsWorkGroupEnum {
  Id = "id",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  Locale = "locale",
  ModelNode = "model___NODE",
  Title = "title",
  Slug = "slug",
  CoverImageNode = "coverImage___NODE",
  ExcerptNodeNode = "excerptNode___NODE",
  Excerpt = "excerpt",
  GalleryNode = "gallery___NODE",
  DescriptionNodeNode = "descriptionNode___NODE",
  Description = "description",
  SeoMetaTagsNode = "seoMetaTags___NODE",
  UpdatedAt = "updatedAt",
  Position = "position",
}

export enum DatoCmsFaviconMetaTagsConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  Tags = "tags",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsFaviconMetaTagsConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsFaviconMetaTagsDistinctEnum {
  Id = "id",
  Parent = "parent",
  Tags = "tags",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsFaviconMetaTagsGroupEnum {
  Id = "id",
  Parent = "parent",
  Tags = "tags",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
}

export enum DatoCmsSiteConnectionSortByFieldsEnum {
  Id = "id",
  Name = "name",
  Locales = "locales",
  ThemePrimaryColorRed = "theme___primaryColor___red",
  ThemePrimaryColorBlue = "theme___primaryColor___blue",
  ThemePrimaryColorAlpha = "theme___primaryColor___alpha",
  ThemePrimaryColorGreen = "theme___primaryColor___green",
  ThemeLightColorRed = "theme___lightColor___red",
  ThemeLightColorBlue = "theme___lightColor___blue",
  ThemeLightColorAlpha = "theme___lightColor___alpha",
  ThemeLightColorGreen = "theme___lightColor___green",
  ThemeDarkColorRed = "theme___darkColor___red",
  ThemeDarkColorBlue = "theme___darkColor___blue",
  ThemeDarkColorAlpha = "theme___darkColor___alpha",
  ThemeDarkColorGreen = "theme___darkColor___green",
  ThemeAccentColorRed = "theme___accentColor___red",
  ThemeAccentColorBlue = "theme___accentColor___blue",
  ThemeAccentColorAlpha = "theme___accentColor___alpha",
  ThemeAccentColorGreen = "theme___accentColor___green",
  InternalDomain = "internalDomain",
  NoIndex = "noIndex",
  GlobalSeoSiteName = "globalSeo___siteName",
  GlobalSeoTitleSuffix = "globalSeo___titleSuffix",
  GlobalSeoFacebookPageUrl = "globalSeo___facebookPageUrl",
  GlobalSeoTwitterAccount = "globalSeo___twitterAccount",
  GlobalSeoFallbackSeoTitle = "globalSeo___fallbackSeo___title",
  GlobalSeoFallbackSeoDescription = "globalSeo___fallbackSeo___description",
  GlobalSeoFallbackSeoTwitterCard = "globalSeo___fallbackSeo___twitterCard",
  GlobalSeoFallbackSeoImage = "globalSeo___fallbackSeo___image",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  FaviconMetaTagsNode = "faviconMetaTags___NODE",
  Locale = "locale",
}

export enum DatoCmsSiteConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum DatoCmsSiteDistinctEnum {
  Id = "id",
  Name = "name",
  Locales = "locales",
  ThemePrimaryColorRed = "theme___primaryColor___red",
  ThemePrimaryColorBlue = "theme___primaryColor___blue",
  ThemePrimaryColorAlpha = "theme___primaryColor___alpha",
  ThemePrimaryColorGreen = "theme___primaryColor___green",
  ThemeLightColorRed = "theme___lightColor___red",
  ThemeLightColorBlue = "theme___lightColor___blue",
  ThemeLightColorAlpha = "theme___lightColor___alpha",
  ThemeLightColorGreen = "theme___lightColor___green",
  ThemeDarkColorRed = "theme___darkColor___red",
  ThemeDarkColorBlue = "theme___darkColor___blue",
  ThemeDarkColorAlpha = "theme___darkColor___alpha",
  ThemeDarkColorGreen = "theme___darkColor___green",
  ThemeAccentColorRed = "theme___accentColor___red",
  ThemeAccentColorBlue = "theme___accentColor___blue",
  ThemeAccentColorAlpha = "theme___accentColor___alpha",
  ThemeAccentColorGreen = "theme___accentColor___green",
  InternalDomain = "internalDomain",
  NoIndex = "noIndex",
  GlobalSeoSiteName = "globalSeo___siteName",
  GlobalSeoTitleSuffix = "globalSeo___titleSuffix",
  GlobalSeoFacebookPageUrl = "globalSeo___facebookPageUrl",
  GlobalSeoTwitterAccount = "globalSeo___twitterAccount",
  GlobalSeoFallbackSeoTitle = "globalSeo___fallbackSeo___title",
  GlobalSeoFallbackSeoDescription = "globalSeo___fallbackSeo___description",
  GlobalSeoFallbackSeoTwitterCard = "globalSeo___fallbackSeo___twitterCard",
  GlobalSeoFallbackSeoImage = "globalSeo___fallbackSeo___image",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  FaviconMetaTagsNode = "faviconMetaTags___NODE",
  Locale = "locale",
}

export enum DatoCmsSiteGroupEnum {
  Id = "id",
  Name = "name",
  Locales = "locales",
  ThemePrimaryColorRed = "theme___primaryColor___red",
  ThemePrimaryColorBlue = "theme___primaryColor___blue",
  ThemePrimaryColorAlpha = "theme___primaryColor___alpha",
  ThemePrimaryColorGreen = "theme___primaryColor___green",
  ThemeLightColorRed = "theme___lightColor___red",
  ThemeLightColorBlue = "theme___lightColor___blue",
  ThemeLightColorAlpha = "theme___lightColor___alpha",
  ThemeLightColorGreen = "theme___lightColor___green",
  ThemeDarkColorRed = "theme___darkColor___red",
  ThemeDarkColorBlue = "theme___darkColor___blue",
  ThemeDarkColorAlpha = "theme___darkColor___alpha",
  ThemeDarkColorGreen = "theme___darkColor___green",
  ThemeAccentColorRed = "theme___accentColor___red",
  ThemeAccentColorBlue = "theme___accentColor___blue",
  ThemeAccentColorAlpha = "theme___accentColor___alpha",
  ThemeAccentColorGreen = "theme___accentColor___green",
  InternalDomain = "internalDomain",
  NoIndex = "noIndex",
  GlobalSeoSiteName = "globalSeo___siteName",
  GlobalSeoTitleSuffix = "globalSeo___titleSuffix",
  GlobalSeoFacebookPageUrl = "globalSeo___facebookPageUrl",
  GlobalSeoTwitterAccount = "globalSeo___twitterAccount",
  GlobalSeoFallbackSeoTitle = "globalSeo___fallbackSeo___title",
  GlobalSeoFallbackSeoDescription = "globalSeo___fallbackSeo___description",
  GlobalSeoFallbackSeoTwitterCard = "globalSeo___fallbackSeo___twitterCard",
  GlobalSeoFallbackSeoImage = "globalSeo___fallbackSeo___image",
  OriginalId = "originalId",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  FaviconMetaTagsNode = "faviconMetaTags___NODE",
  Locale = "locale",
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  InternalContent = "internal___content",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  FrontmatterTitle = "frontmatter___title",
  RawMarkdownBody = "rawMarkdownBody",
  Html = "html",
  Excerpt = "excerpt",
  Headings = "headings",
  TimeToRead = "timeToRead",
  TableOfContents = "tableOfContents",
  WordCountParagraphs = "wordCount___paragraphs",
  WordCountSentences = "wordCount___sentences",
  WordCountWords = "wordCount___words",
}

export enum MarkdownRemarkConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC",
}

export enum MarkdownRemarkDistinctEnum {
  Id = "id",
  Parent = "parent",
  InternalContent = "internal___content",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  FrontmatterTitle = "frontmatter___title",
  RawMarkdownBody = "rawMarkdownBody",
}

export enum MarkdownRemarkGroupEnum {
  Id = "id",
  Parent = "parent",
  InternalContent = "internal___content",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  FrontmatterTitle = "frontmatter___title",
  RawMarkdownBody = "rawMarkdownBody",
}

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;


