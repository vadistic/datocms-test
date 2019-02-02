import Img from 'gatsby-image'
import React from 'react'
import { WorkQuery_datoCmsWork } from '../generated/graphql'
import { Idx } from '../utils'

export interface LightboxProps {
  cover: Idx<WorkQuery_datoCmsWork['coverImage']>
  gallery?: Idx<WorkQuery_datoCmsWork['gallery']>
}

export const Lightbox: React.FC<LightboxProps> = ({ cover }) => {
  const images = [cover].map(img => img.fluid)

  return <Img fluid={images[0]} />
}
