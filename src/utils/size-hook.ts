import React, { useEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export interface UseSizePayload {
  width?: number
  height?: number
  ref: React.RefObject<HTMLElement>
}

export const useSize = (ref?: React.RefObject<HTMLElement>) => {
  const _ref = ref || useRef(null)

  const [size, setSize] = useState<UseSizePayload>({
    width: undefined,
    height: undefined,
    ref: _ref,
  })

  useEffect(() => {
    const element = _ref.current

    if (element) {
      const resizeObserver = new ResizeObserver(entries => {
        if (!Array.isArray(entries)) {
          return
        }

        if (!entries.length) {
          return
        }

        const entry = entries[0]

        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
          ref: _ref,
        })
      })

      resizeObserver.observe(element)

      return () => resizeObserver.unobserve(element)
    }
  }, [])

  return size
}
