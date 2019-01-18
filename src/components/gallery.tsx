import Img from 'gatsby-image'
import React from 'react'
import _PhotoGallery, {
  GalleryI,
  ImageComponentProps,
  PhotoClickHandler,
} from 'react-photo-gallery'

import {
  GatsbyDatoCmsFluidFragment,
  IndexPageQuery,
} from '../generated/graphql'
import { Idx } from '../utils'

type CustomPhotoProps = Idx<GatsbyDatoCmsFluidFragment>

const PhotoGallery = _PhotoGallery as GalleryI<CustomPhotoProps>

const Image: React.FC<ImageComponentProps<CustomPhotoProps>> = ({
  photo,
  margin,
  onClick,
  index,
  direction,
  top,
  left,
}) => {
  const handleClick: React.MouseEventHandler = event => {
    console.log('ImageProps')
    console.log('margin: ', margin)
    if (onClick) {
      onClick(event, { index })
    }
  }

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

  return (
    <div style={imgStyle} onClick={onClick ? handleClick : undefined}>
      <Img fluid={photo} />
    </div>
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

  const photos = items.map(({ node }) => ({
    ...node.coverImage.fluid,
    height: 1,
    width: node.coverImage.fluid.aspectRatio,
  }))

  const onClick: PhotoClickHandler<CustomPhotoProps> = () => {
    // noop
  }

  return (
    <PhotoGallery
      photos={photos}
      columns={getColumns}
      ImageComponent={Image}
      onClick={onClick}
    />
  )
}
