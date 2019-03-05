import { graphql, navigate } from 'gatsby'
import { StaticQuery } from 'gatsby'
import { Box, Layer, Text } from 'grommet'
import { Close, Menu } from 'grommet-icons'
import { Button } from 'grommet/components/Button'
import { Paragraph } from 'grommet/components/Paragraph'
import React, { useContext, useState } from 'react'
import { NavigationQuery } from '../generated/graphql'
import { css, useMedia } from '../styles'
import { Idx, useTheme } from '../utils'
import { PageType } from './layout'
import { Link } from './link'
import { Social } from './social'
import { TagsContext } from './tags'

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
    <>
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
    </>
  )
}

export interface NavigationProps {
  pageType: PageType
}

export const Navigation: React.FC<NavigationProps> = ({ pageType }) => {
  const { setTagsFilter } = useContext(TagsContext)
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const isMobile = useMedia({ max: 'medium' })
  const isSmall = useMedia({ max: 'small' })

  const handleKeyboard: React.KeyboardEventHandler = e => {
    if (e.key === 'Escape') {
      if (pageType !== PageType.Home) {
        navigate('/')
      } else {
        setTagsFilter([])
      }
    }
  }

  const renderMenuButton = (
    <Box
      css={css`
        position: fixed;
        right: 18px;
        top: 0;
        z-index: 20;
      `}
    >
      <Button
        onClick={() => setOpen(!open)}
        icon={open ? <Close size="large" /> : <Menu size="large" />}
      />
    </Box>
  )

  const renderLinks = (
    <>
      <Box className="logo">
        <Link color="brand" size="xlarge">
          Logo
        </Link>
      </Box>
      <Box className="links">
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
    </>
  )

  const introText = (
    <StaticQuery<Idx<NavigationQuery>> query={NAVIGATION_QUERY}>
      {data => data.datoCmsHomePage.introText}
    </StaticQuery>
  )

  if (!isMobile) {
    return (
      <Box
        justify="between"
        height="100vh"
        className="navigation"
        onKeyDown={handleKeyboard}
        tabIndex={0}
      >
        <Box
          as="nav"
          css={css`
            .logo {
              margin-bottom: ${theme.global.edgeSize.large};
            }

            .links,
            .tags {
              margin-bottom: ${theme.global.edgeSize.medium};

              & > * {
                margin-bottom: ${theme.global.edgeSize.hair};
              }
            }
          `}
        >
          {renderLinks}
        </Box>
        <Box as="aside">
          <Social />
          <Text size="xsmall">{introText}</Text>
        </Box>
      </Box>
    )
  }

  if (isMobile) {
    return (
      <>
        {renderMenuButton}
        {open && (
          <Layer
            full="horizontal"
            modal
            position="top"
            responsive
            onClickOutside={() => setOpen(false)}
            onEsc={() => setOpen(false)}
          >
            <Box pad="large" justify="evenly" align="center" height={isSmall ? '100%' : undefined}>
              <Box
                as="nav"
                align="center"
                css={css`
                  .logo {
                    margin-bottom: ${theme.global.edgeSize.large};
                  }

                  .links,
                  .tags {
                    margin-bottom: ${theme.global.edgeSize.medium};

                    & > * {
                      margin-bottom: ${theme.global.edgeSize.hair};
                    }
                  }
                `}
              >
                {renderLinks}
              </Box>
              <Box as="aside" align="center">
                <Social />
                <Paragraph textAlign="center">{introText}</Paragraph>
              </Box>
            </Box>
          </Layer>
        )}
      </>
    )
  }

  return null
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
