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

const fixAspectRatio = (aspectRatio: number) => {
  // calculate images length as fraction of width in 0.25 increments
  // co columns layout edges won't have misaligments
  const ratioValues = [4, 2, 4 / 3, 1, 4 / 5, 2 / 3, 4 / 7, 1 / 2]

  // very wide
  if (aspectRatio > ratioValues[0]) {
    return ratioValues[0]
  }

  // very high
  if (aspectRatio < ratioValues[ratioValues.length - 1]) {
    return ratioValues[ratioValues.length - 1]
  }

  let result = 0

  ratioValues.forEach((val, i) => {
    const current = val
    const next = ratioValues[i + 1]

    if (aspectRatio <= current && aspectRatio > next) {
      // calculate distance
      result = current - aspectRatio <= aspectRatio - next ? current : next
    }
  })

  return result
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
      ...node.coverImage.fluid,
      aspectRatio,
      height: 1,
      width: aspectRatio,
    }
  })

  const onClick: PhotoClickHandler<CustomPhotoProps> = () => {
    // noop
  }

  return (
    <PhotoGallery
      margin={4}
      photos={photos}
      direction="column"
      columns={getColumns}
      ImageComponent={ImageComponent}
      onClick={onClick}
    />
  )
}