import React from 'react'

export interface TagsContextValue {
  allTags: string[]
  tagsFilter: string[]
  setTagsFilter: React.Dispatch<React.SetStateAction<string[]>>
}

export const TagsContext = React.createContext({} as TagsContextValue)
