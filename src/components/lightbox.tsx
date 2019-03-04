import Img from 'gatsby-image'
import { Button } from 'grommet'
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

  const { height, width } = useSize(ref)
  const [index, setIndex] = useState(0)
  const [fistRender, setFirstRender] = useState(true)

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
    enter: { opacity: fistRender ? 1 : 0 },
    update: { opacity: 1 },
    leave: { opacity: 0 },
    unique: true,
    reset: true,
    config: config.stiff,
  })

  // hacky, but nvm
  // the issue is that I want to have opacity enter animation after update
  // there are ranges, and async fn, but...
  useMemo(() => {
    setFirstRender(false)
  }, [])

  // autoplay is probably a cancer, so no
  // useEffect(
  //   () => void setInterval(() => setIndex(_index => (_index + 1) % images.length), 5000),
  //   [],
  // )

  const [spring, setSpring] = useSpring(() => ({
    xy: [0, 0],
    blur: 0,
    config: config.slow,
  }))

  const bind = useGesture(({ down, delta: [deltaX, deltaY], distance, cancel, velocity }) => {
    const distanceX = Math.abs(deltaX)

    if (distance < 5) {
      pending.current = false
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

      console.log('velocity', velocity)
      console.log('distanceX', distanceX)
      console.log('maxXOverflow', maxXOverflow)

      const distanceThreshold = distanceX > maxXOverflow + window.innerWidth / 3
      const velocityThreshold = velocity > 4 && distanceX > maxXOverflow

      if (down && cancel && images.length > 1 && (distanceThreshold || velocityThreshold)) {
        pending.current = true
        cancel()

        deltaX < 0 ? handleNext() : handlePrev()
      }

      setSpring({
        xy: down ? [deltaX, deltaY] : pending.current ? [0, 0] : [deltaXClamp, deltaYClamp],
        blur: down && distanceX > window.innerWidth / 6 ? distanceX / 100 : 0,
      })
    }
  })

  const handleKeyboard: React.KeyboardEventHandler = e => {
    if (e.key === 'ArrowRight') {
      handleNext()
    }
    if (e.key === 'ArrowLeft') {
      handlePrev()
    }
  }

  const getSize = (item: typeof images[number]) => {
    if (width && height) {
      const viewboxRatio = width / height

      return viewboxRatio >= item.aspectRatio
        ? {
            width: '100%',
            height: width / currentImage.aspectRatio,
          }
        : {
            width: currentImage.aspectRatio * height,
            height: '100%',
          }
    }

    return {
      height: '100%',
      width: '100%',
    }
  }

  return (
    <div
      css={{
        position: 'relative',
        width: '100%',
        height: '70vh',
        overflow: 'hidden',
        // TODO: fix outline (it's ugly?)
        '&:focus': { outline: 'none' },
        // disable mobile pull to refresh
        touchAction: 'none',
      }}
      onKeyDown={handleKeyboard}
      tabIndex={0}
      ref={ref}
    >
      {images.length > 1 && <LightboxControls handlePrev={handlePrev} handleNext={handleNext} />}

      {transitions.map(({ item, props, key, state }) => (
        <animated.div
          {...bind()}
          key={key}
          style={{
            ...props,
            willChange: 'transform',
            userSelect: 'none',
            height: '100%',
            width: '100%',
            cursor: 'move',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
          <picture
            css={{
              ...getSize(item),
            }}
          >
            <source srcSet={item.srcSet} sizes={item.sizes} />
            <img src={item.src} css={{ ...getSize(item) }} />
          </picture>
          {/* preload */}
          <Img fluid={images[getNextIndex(index)]} css={{ display: 'none' }} />
          <Img fluid={images[getPrevIndex(index)]} css={{ display: 'none' }} />
        </animated.div>
      ))}
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
          bottom: '50%',
          left: 0,
          zIndex: '123',
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
          bottom: '50%',
          right: 0,
          zIndex: '123',
          cursor: 'pointer',
        }}
        onClick={handleNext}
        icon={<Next color="white" />}
      />
    </>
  )
}
