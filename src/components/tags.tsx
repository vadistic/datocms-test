import React, { useContext } from 'react'
import { Link } from './link'

export interface TagsContextValue {
  allTags: string[]
  tagsFilter: string[]
  setTagsFilter: React.Dispatch<React.SetStateAction<string[]>>
}

export const TagsContext = React.createContext({} as TagsContextValue)
