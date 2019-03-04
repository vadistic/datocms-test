import Img from 'gatsby-image'
import { Button } from 'grommet'
import React, { useMemo, useRef, useState } from 'react'
import { animated, config, useSpring, useTransition } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import { WorkQuery_datoCmsWork } from '../generated/graphql'
import { Idx } from '../utils'

import { Next, Previous } from 'grommet-icons'

// theres and issue with typings for react spring
// https://github.com/react-spring/react-spring/issues/571

export interface LightboxProps {
  cover: Idx<WorkQuery_datoCmsWork['coverImage']>
  gallery: Idx<WorkQuery_datoCmsWork['gallery']>
}

export const Lightbox: React.FC<LightboxProps> = ({ cover, gallery }) => {
  const ref = useRef<HTMLDivElement>(null)
  const images = [cover, ...gallery].map(img => img.fluid)

  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex(_index => (_index + 1) % images.length)
  }

  const handlePrev = () => {
    setIndex(_index => ((_index || images.length) - 1) % images.length)
  }

  const [fistRender, setFirstRender] = useState(true)

  const transitions = useTransition(images[index], image => image.src, {
    from: { opacity: 0 },
    enter: { opacity: fistRender ? 1 : 0 },
    update: { opacity: 1 },
    leave: { opacity: 0 },
    unique: true,
    reset: true,
    config: config.stiff,
  })

  // hacky, but nvm
  // the issue is that I want enter animation after update
  // there are ranges, and aysn fn, but typings are faulty so this is the quickiest
  useMemo(() => {
    setFirstRender(false)
  }, [])

  // autoplay is probably a cancer, so no
  // useEffect(
  //   () => void setInterval(() => setIndex(_index => (_index + 1) % images.length), 5000),
  //   [],
  // )

  const [spring, setSpring] = useSpring(() => ({
    x: 0,
    config: config.wobbly,
  }))

  const bind = useGesture(({ down, delta: [deltaX], distance, cancel }) => {
    if (down && distance > window.innerWidth / 3 && cancel) {
      setSpring({
        x: 2 * deltaX,
      })
      cancel()

      deltaX < 0 ? handleNext() : handlePrev()
    }

    setSpring({
      x: down ? deltaX : 0,
    })
  })

  const handleKeyboard: React.KeyboardEventHandler = e => {
    if (e.key === 'ArrowRight') {
      handleNext()
    }
    if (e.key === 'ArrowLeft') {
      handlePrev()
    }
  }

  const renderControls = () => (
    <>
      <Button
        reverse
        plain
        hoverIndicator
        css={{
          position: 'absolute',
          bottom: '50%',
          left: 0,
          zIndex: '123',
          cursor: 'pointer',
        }}
        onClick={handlePrev}
        icon={<Previous color={'white' as any} />}
      />

      <Button
        plain
        reverse
        hoverIndicator
        css={{
          position: 'absolute',
          bottom: '50%',
          right: 0,
          zIndex: '123',
          cursor: 'pointer',
        }}
        onClick={handleNext}
        icon={<Next color={'white' as any} />}
      />
    </>
  )

  return (
    <div
      css={{ position: 'relative', '&:focus': { outline: 'none' } }}
      onKeyDown={handleKeyboard}
      tabIndex={0}
      ref={ref}
    >
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
            css={{
              // prevents jumps on image loads
              height: ref.current && state === 'leave' ? 0 : 'inherit',
            }}
          >
            {images.length > 1 && renderControls()}
            <Img fluid={item} />
          </div>
        </animated.div>
      ))}
    </div>
  )
}
