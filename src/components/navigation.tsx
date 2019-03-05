import { graphql, navigate } from 'gatsby'
import { StaticQuery } from 'gatsby'
import { Box, Layer, Text } from 'grommet'
import { Close, Menu, Revert } from 'grommet-icons'
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

interface FloatingButtonProps {
  onClick: () => void
  iconName: 'Close' | 'Menu' | 'Revert'
  position: 'right' | 'left'
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick: handleClick,
  iconName,
  position,
}) => {
  const isSmall = useMedia({ max: 'small' })

  const styles = css`
    position: fixed;
    z-index: 20;
    top: 0;

    ${position === 'right' &&
      css`
        right: 6px;
      `}

    ${position === 'left' &&
      css`
        left: 0;
      `}
  `

  const Icon = {
    Close,
    Menu,
    Revert,
  }[iconName]

  return (
    <Box css={styles}>
      <Button
        onClick={handleClick}
        icon={<Icon size={isSmall ? 'medium' : 'large'} color="black" />}
      />
    </Box>
  )
}

export interface NavigationProps {
  pageType: PageType
}

export const Navigation: React.FC<NavigationProps> = ({ pageType }) => {
  const { allTags, setTagsFilter, tagsFilter } = useContext(TagsContext)
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

  const handleRevert = () => {
    navigate('/')
  }

  const renderRevertButton = (
    <FloatingButton onClick={handleRevert} iconName="Revert" position="left" />
  )

  const renderMenuButton = (
    <FloatingButton
      onClick={() => setOpen(!open)}
      iconName={open ? 'Close' : 'Menu'}
      position="right"
    />
  )

  const handleTagClick = (tag: string) => () => {
    if (tagsFilter.includes(tag)) {
      setTagsFilter(tagsFilter.filter(el => el !== tag))
    } else {
      setTagsFilter([...tagsFilter, tag])
    }
  }

  const renderLinks = (
    <>
      <Box className="logo">
        <Link color="brand" size="xxlarge">
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
          {allTags.map(tag => (
            <Link
              key={tag}
              color={tagsFilter.includes(tag) ? 'brand' : 'black'}
              onClick={handleTagClick(tag)}
              size="large"
            >
              {tag}
            </Link>
          ))}
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
    const styles = css`
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
    `

    return (
      <Box
        justify="between"
        height="100vh"
        className="navigation"
        onKeyDown={handleKeyboard}
        tabIndex={0}
      >
        <Box as="nav" css={styles}>
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
    const mobileStyles = css`
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
    `

    return (
      <>
        {renderMenuButton}
        {pageType !== PageType.Home && renderRevertButton}
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
              <Box as="nav" align="center" css={mobileStyles}>
                {renderLinks}
              </Box>
              <Box as="aside" align="center">
                <Social iconWrapperProsp={{ pad: 'medium' }} />

                {!isSmall && <Paragraph textAlign="center">{introText}</Paragraph>}
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
