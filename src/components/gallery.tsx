import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Heading, Text } from 'grommet'
import React from 'react'
import _PhotoGallery, {
  GalleryI,
  ImageComponentProps,
  PhotoClickHandler,
} from 'react-photo-gallery'
import { GatsbyDatoCmsFluid, IndexPageQuery } from '../generated/graphql'
import { css, ThemeProps } from '../styles'
import { fixAspectRatio, Idx } from '../utils'

type CustomPhotoProps = Idx<GatsbyDatoCmsFluid> & {
  node: Idx<IndexPageQuery>['allDatoCmsWork']['edges'][number]['node']
}

const PhotoGallery = _PhotoGallery as GalleryI<CustomPhotoProps>

// zoom effect
const imageComponentStyles = ({ theme }: ThemeProps) => css`
  overflow: hidden;
  position: relative;

  .gatsby-image-wrapper {
    transition: all ${theme.global.animation.medium};
  }

  figcaption {
    transition: all ${theme.global.animation.medium};

    z-index: 5;
    position: absolute;
    bottom: 0;
    visibility: hidden;
    opacity: 0.001;

    margin: ${theme.global.edgeSize.medium};
  }

  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.05);
      opacity: 0.2;

      filter: grayscale(100%);
    }

    figcaption {
      visibility: visible;
      opacity: 1;
      max-height: 100%;
      overflow: hidden;
    }
  }
`

const ImageComponent: React.FC<ImageComponentProps<CustomPhotoProps>> = ({
  photo,
  margin,
  onClick,
  index,
  direction,
  top,
  left,
}) => {
  const handleClick: React.MouseEventHandler = event => {
    if (onClick) {
      onClick(event, { index })
    }
  }

  // iniline styles here
  const imgStyle: React.CSSProperties = {
    margin,
    height: photo.height,
    width: photo.width,
  }

  if (direction === 'column') {
    imgStyle.position = 'absolute'
    imgStyle.left = left
    imgStyle.top = top
  }

  if (onClick) {
    imgStyle.cursor = 'pointer'
  }

  const MAX_CHARS = 200

  const trimChars = (text: string) =>
    text.length <= MAX_CHARS ? text : text.slice(0, MAX_CHARS).replace(/[^\s]+$/, ' ') + '...'

  return (
    <Box
      style={imgStyle}
      css={imageComponentStyles}
      onClick={onClick ? handleClick : undefined}
      animation="fadeIn"
      className="figure"
      as="figure"
    >
      <Box as="figcaption" className="figcaption">
        <Heading level="4">{photo.node.title}</Heading>
        <Text size="xsmall">{trimChars(photo.node.excerpt)}</Text>
      </Box>
      <Img fluid={photo} />
    </Box>
  )
}

interface GalleryProps {
  items: Idx<IndexPageQuery>['allDatoCmsWork']['edges']
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const getColumns = (containerWidth: number) => {
    let col = 1
    if (containerWidth >= 500) {
      col = 2
    }
    if (containerWidth >= 900) {
      col = 3
    }
    if (containerWidth >= 1500) {
      col = 4
    }
    return col
  }

  const photos = items.map(({ node }) => {
    const aspectRatio = fixAspectRatio(node.coverImage.fluid.aspectRatio)
    return {
      node,
      ...node.coverImage.fluid,
      aspectRatio,
      height: 1,
      width: aspectRatio,
    }
  })

  const onClick: PhotoClickHandler<CustomPhotoProps> = (ev, { photo }) => {
    navigate('/works/' + photo.node.slug)
  }

  return (
    <PhotoGallery
      margin={0}
      photos={photos}
      direction="column"
      columns={getColumns}
      ImageComponent={ImageComponent}
      onClick={onClick}
    />
  )
}
