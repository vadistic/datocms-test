import { Grommet } from 'grommet'
import React from 'react'
import { theme } from '../styles'

export interface WrapRootElementProps {
  element: any
  props: any
}

const wrapRootElement: React.FC<WrapRootElementProps> = ({ element, props }) => {
  return (
    <>
      <Grommet theme={theme} full>
        {element}
      </Grommet>
    </>
  )
}

export default wrapRootElement
