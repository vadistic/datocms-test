import Img from 'gatsby-image'
import { Button, Stack } from 'grommet'
import { Next, Previous } from 'grommet-icons'
import clamp from 'lodash-es/clamp'
import React, { useMemo, useRef, useState } from 'react'
import { animated, config, useSpring, useTransition } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import { WorkQuery_datoCmsWork } from '../generated/graphql'
import { Idx, useSize } from '../utils'

export interface LightboxProps {
  cover: Idx<WorkQuery_datoCmsWork['coverImage']>
  gallery: Idx<WorkQuery_datoCmsWork['gallery']>
}

export const Lightbox: React.FC<LightboxProps> = ({ cover, gallery }) => {
  const ref = useRef<HTMLDivElement>(null)
  const pending = useRef(false)

  const [index, setIndex] = useState(0)
  const { height, width } = useSize(ref)

  const images = [cover, ...gallery].map(img => img.fluid)
  const currentImage = images[index]

  const getNextIndex = (i: number) => (i + 1) % images.length
  const getPrevIndex = (i: number) => ((i || images.length) - 1) % images.length

  const handleNext = () => {
    setIndex(i => getNextIndex(i))
  }
  const handlePrev = () => {
    setIndex(i => getPrevIndex(i))
  }

  const transitions = useTransition(images[index], image => image.src, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },

    unique: true,
    reset: true,
  })

  // autoplay is probably a cancer, so no
  // useEffect(
  //   () => void setInterval(() => setIndex(_index => (_index + 1) % images.length), 5000),
  //   [],
  // )

  const [spring, setSpring] = useSpring(() => ({
    xy: [0, 0],
    blur: 0,
    config: config.gentle,
  }))

  // temp var to calculate directional velocity
  let previous: {
    time: number
    deltaX: number
  }

  const bind = useGesture(({ down, delta: [deltaX, deltaY], distance, cancel, velocity, time }) => {
    const distanceX = Math.abs(deltaX)

    if (distance < 5) {
      pending.current = false
    }

    const velocityX = previous
      ? Math.abs(deltaX - previous.deltaX) / (time - previous.time || 1)
      : 0

    previous = {
      time,
      deltaX,
    }

    if (ref.current) {
      const { clientWidth, clientHeight } = ref.current

      const viewboxRatio = clientWidth / clientHeight

      const maxXOverflow =
        currentImage.aspectRatio >= viewboxRatio
          ? (currentImage.aspectRatio * clientHeight - clientWidth) / 2
          : 0

      const maxYOverflow =
        currentImage.aspectRatio <= viewboxRatio
          ? (clientWidth / currentImage.aspectRatio - clientHeight) / 2
          : 0

      const deltaXClamp = clamp(deltaX, -maxXOverflow, +maxXOverflow)
      const deltaYClamp = clamp(deltaY, -maxYOverflow, +maxYOverflow)

      // magic formula?
      const shouldSwipe = velocityX > clientWidth / 200

      if (down && cancel && images.length > 1 && shouldSwipe) {
        pending.current = true
        cancel()

        deltaX < 0 ? handleNext() : handlePrev()
      }

      setSpring({
        xy: down ? [deltaX, deltaY] : pending.current ? [0, 0] : [deltaXClamp, deltaYClamp],
        blur:
          down && distanceX - maxXOverflow > window.innerWidth / 6
            ? (distanceX - maxXOverflow) / 50
            : 0,
      })
    }
  })

  useMemo(() => {
    setSpring({
      xy: [0, 0],
      blur: 0,
    })
  }, [index])

  const handleKeyboard: React.KeyboardEventHandler = e => {
    if (e.key === 'ArrowRight') {
      handleNext()
    }
    if (e.key === 'ArrowLeft') {
      handlePrev()
    }
  }

  return (
    <div
      onKeyDown={handleKeyboard}
      tabIndex={0}
      ref={ref}
      css={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        '&:focus': { outline: 'none' },
        touchAction: 'pan-y',
      }}
    >
      {images.length > 1 && <LightboxControls handlePrev={handlePrev} handleNext={handleNext} />}
      <animated.div
        {...bind()}
        style={{
          // this one actually makes a difference
          willChange: 'transform',

          height: '100%',
          width: '100%',

          userSelect: 'none',
          cursor: 'move',

          // theres and issue with typings for react spring
          // https://github.com/react-spring/react-spring/issues/571
          transform: spring.xy.interpolate(((_x: number, _y: number) =>
            `translate3d(${_x}px, ${_y}px, 0)`) as any),
          filter: spring.blur.interpolate(val => `blur(${val}px)`),
        }}
        /* trying to minimize issues when cursor interacts with other elements durging drag */
        onDragStart={e => {
          e.preventDefault()
        }}
        onClick={e => {
          e.preventDefault()
        }}
      >
        <Stack fill>
          {transitions.map(({ item, props, key, state }, i) => (
            <animated.div
              key={key}
              style={{
                ...props,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
              }}
            >
              <Img
                fluid={item}
                fadeIn={false}
                style={{
                  // y overflow is magically solved with minWidth
                  minHeight: '100%',
                  // x overflow needs to be calculated from sensor values
                  minWidth:
                    width && height
                      ? Math.max(100, (item.aspectRatio * height * 100) / width) + '%'
                      : '100%',
                  overflow: 'visible',
                }}
              />
            </animated.div>
          ))}
        </Stack>
      </animated.div>
      {/* preload */}
      <Img fluid={images[getNextIndex(index)]} css={{ display: 'none' }} fadeIn={false} />
      <Img fluid={images[getPrevIndex(index)]} css={{ display: 'none' }} fadeIn={false} />
    </div>
  )
}

interface LightboxControlsProps {
  handlePrev: () => void
  handleNext: () => void
}

const LightboxControls: React.FC<LightboxControlsProps> = ({ handleNext, handlePrev }) => {
  return (
    <>
      <Button
        reverse
        plain
        hoverIndicator
        css={{
          position: 'absolute',
          bottom: '33%',
          left: 0,
          zIndex: '1',
          cursor: 'pointer',
        }}
        onClick={handlePrev}
        icon={<Previous color="white" />}
      />

      <Button
        plain
        reverse
        hoverIndicator
        css={{
          position: 'absolute',
          bottom: '33%',
          right: 0,
          zIndex: '1',
          cursor: 'pointer',
        }}
        onClick={handleNext}
        icon={<Next color="white" />}
      />
    </>
  )
}
