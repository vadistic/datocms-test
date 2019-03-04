export interface FixAspectRatioOptions {
  min?: number
  max?: number
}
const defaultOptions = {
  min: 1 / 2,
  max: 4,
}

export const fixAspectRatio = (
  aspectRatio: number,
  options: FixAspectRatioOptions = defaultOptions,
) => {
  // calculate images length as fraction of width in 0.25 increments
  // so columns layout edges won't have misaligments

  const allOptions = { ...options, ...defaultOptions }

  const ratioValues = [4, 2, 4 / 3, 1, 4 / 5, 2 / 3, 4 / 7, 1 / 2].filter(
    val => val <= allOptions.max && val >= allOptions.min,
  )

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
