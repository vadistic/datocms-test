import Img from 'gatsby-image'
import React from 'react'
import {
  GatsbyDatoCmsFluid,
  WorkQuery,
  WorkQuery_datoCmsWork,
  WorkQuery_datoCmsWork_coverImage,
  WorkQuery_datoCmsWork_gallery,
} from '../generated/graphql'
import { Idx } from '../utils'

export interface LightboxProps {
  cover: Idx<WorkQuery_datoCmsWork['coverImage']>
  gallery: Idx<WorkQuery_datoCmsWork['gallery']>
}

export const Lightbox: React.FC<LightboxProps> = ({ cover, gallery }) => {
  const images = [cover, ...gallery].map(img => img.fluid)

  return <Img fluid={images[0]} />
}
