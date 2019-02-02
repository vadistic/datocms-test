import React from 'react'

export interface FilterTagsContextValue {
  allTags: string[]
  tagsFilter: string[]
  setTagsFilter: React.Dispatch<React.SetStateAction<string[]>>
}

export const FilterTagsContext = React.createContext({} as FilterTagsContextValue)
