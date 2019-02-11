import { graphql, navigate } from 'gatsby'
import { StaticQuery } from 'gatsby'
import { Box, Keyboard, Text } from 'grommet'
import React, { Fragment, useContext } from 'react'
import { NavigationQuery } from '../generated/graphql'
import { css, ThemeProps } from '../styles'
import { Idx } from '../utils'
import { PageType } from './layout'
import { Link } from './link'
import { Social } from './social'
import { TagsContext } from './tags'

export const linkStyles = ({ theme }: ThemeProps) => css`
  .links,
  .tags {
    margin: ${theme.global.edgeSize.small} 0;

    & > * {
      margin: ${theme.global.edgeSize.hair} 0;
    }
  }
`

export const TagLinks: React.FC = () => {
  const { allTags, setTagsFilter, tagsFilter } = useContext(TagsContext)

  const handleTagClick = (tag: string) => () => {
    if (tagsFilter.includes(tag)) {
      setTagsFilter(tagsFilter.filter(el => el !== tag))
    } else {
      setTagsFilter([...tagsFilter, tag])
    }
  }

  return (
    <Fragment>
      {allTags.map(tag => (
        <Link
          key={tag}
          color={tagsFilter.includes(tag) ? 'brand' : 'black'}
          onClick={handleTagClick(tag)}
          size="xlarge"
        >
          {tag}
        </Link>
      ))}
    </Fragment>
  )
}

export interface NavigationProps {
  pageType: PageType
}

export const Navigation: React.FC<NavigationProps> = ({ pageType }) => {
  const { setTagsFilter } = useContext(TagsContext)

  const handleEsc = () => {
    if (pageType !== PageType.Home) {
      navigate('/')
    } else {
      setTagsFilter([])
    }
  }

  return (
    <Keyboard target="document" onEsc={handleEsc}>
      <Box justify="between" height="100vh" className="navigation">
        <div css={linkStyles}>
          <code>Logo</code>
          <Box as="nav" className="links">
            <Link color="text" size="large" to="/">
              home
            </Link>
            <Link color="text" size="large" to="/about">
              about
            </Link>
          </Box>
          {pageType === PageType.Home && (
            <Box className="tags">
              <TagLinks />
            </Box>
          )}
        </div>
        <div>
          <Social />
          <StaticQuery<Idx<NavigationQuery>> query={NAVIGATION_QUERY}>
            {data => (
              <Box as="aside">
                <Text size="xsmall">{data.datoCmsHomePage.introText}</Text>
              </Box>
            )}
          </StaticQuery>
        </div>
      </Box>
    </Keyboard>
  )
}

// ! static queries cannot be exported or netlify build will break
// https://github.com/gatsbyjs/gatsby/issues/6350
const NAVIGATION_QUERY = graphql`
  query NavigationQuery {
    datoCmsHomePage {
      introText
    }
  }
`
