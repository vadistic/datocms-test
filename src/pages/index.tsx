import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import React, { useState } from 'react'
import { FilterTagsContext, Gallery, Layout, PageType } from '../components'
import { IndexPageQuery } from '../generated/graphql'
import { IdxData } from '../utils'

export const IndexPage: React.FC<IdxData<IndexPageQuery>> = ({ data }) => {
  const onlyUnique = (value: string, index: number, self: string[]) =>
    self.indexOf(value) === index

  const allTags = data.allDatoCmsWork.edges
    .map(edge => edge.node.tags.split(', '))
    .flat(1)
    .filter(onlyUnique)

  const [tagsFilter, setTagsFilter] = useState([] as string[])

  const items =
    tagsFilter.length === 0
      ? data.allDatoCmsWork.edges
      : data.allDatoCmsWork.edges.filter(edge =>
          edge.node.tags.split(', ').some(tag => tagsFilter.includes(tag)),
        )

  return (
    <FilterTagsContext.Provider value={{ allTags, tagsFilter, setTagsFilter }}>
      <Layout pageType={PageType.Home}>
        <article>
          <Gallery items={items} />
        </article>
      </Layout>
    </FilterTagsContext.Provider>
  )
}

export const INDEX_PAGE_QUERY = graphql`
  query IndexPageQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          slug
          tags
          excerpt
          description
          updatedAt
          coverImage {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
