import Img from 'gatsby-image'
import React, { useEffect, useRef, useState } from 'react'
import { animated, config, useSpring, useSprings, useTransition } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import { WorkQuery_datoCmsWork } from '../generated/graphql'
import { Idx } from '../utils'

import { Stack } from 'grommet'
import clamp from 'lodash-es/clamp'

// theres and issue with typings for react spring
// https://github.com/react-spring/react-spring/issues/571

export interface LightboxProps {
  cover: Idx<WorkQuery_datoCmsWork['coverImage']>
  gallery: Idx<WorkQuery_datoCmsWork['gallery']>
}

export const Lightbox: React.FC<LightboxProps> = ({ cover, gallery }) => {
  const images = [cover, ...gallery].map(img => img.fluid)

  const [index, setIndex] = useState(0)

  const transitions = useTransition(images[index], image => image.src, {
    from: { opacity: 1 },
    enter: { opacity: 0 },
    update: { opacity: 1 },
    leave: { opacity: 1 },
    config: config.default,
  })

  // useEffect(
  //   () => void setInterval(() => setIndex(_index => (_index + 1) % images.length), 5000),
  //   [],
  // )

  const [spring, setSpring] = useSpring(() => ({
    x: 0,
    config: config.gentle,
  }))

  const bind = useGesture(({ down, delta: [deltaX], distance, cancel }) => {
    if (down && deltaX > window.innerWidth / 3 && cancel) {
      console.log('setstate')
      setSpring({ x: window.innerWidth })
      cancel()
      setIndex(_index => (_index + 1) % images.length)
    }

    setSpring({
      x: down ? deltaX : 0,
    })
  })

  return (
    <>
      {transitions.map(({ item, props, key, state }) => (
        <animated.div
          {...bind()}
          key={key}
          style={{
            ...props,
            willChange: 'transform',
            userSelect: 'none',
            cursor: 'move',
            transform: spring.x.interpolate(val => `translate3d(${val}px, 0, 0)`),
          }}
        >
          <div
            onDragStart={e => {
              e.preventDefault()
            }}
          >
            {console.log(item)}
            <Img fluid={item} />
          </div>
        </animated.div>
      ))}
    </>
  )
}
