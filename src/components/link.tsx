import { navigate } from 'gatsby'
import { Anchor, AnchorProps } from 'grommet'
import React from 'react'

export interface LinkProps {
  to?: string
}

export const Link: React.FC<LinkProps & AnchorProps> = ({ to, ...rest }) => {
  const handleClick = () => {
    if (to) {
      navigate(to)
    }
  }

  return <Anchor onClick={to ? handleClick : undefined} {...rest} />
}
