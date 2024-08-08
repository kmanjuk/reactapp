'use strict'

/**
 * Represents a color in RGB format.
 * @class Color
 */
class Color {
  /**
   * Creates an instance of the Color class.
   * @param {number} r - Red component (0-255).
   * @param {number} g - Green component (0-255).
   * @param {number} b - Blue component (0-255).
   */
  constructor(r, g, b) {
    this.set(r, g, b)
  }

  /**
   * Returns a string representation of the color in RGB format.
   * @returns {string} RGB color string.
   */
  toString() {
    return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`
  }

  /**
   * Sets the color components and clamps their values.
   * @param {number} r - Red component (0-255).
   * @param {number} g - Green component (0-255).
   * @param {number} b - Blue component (0-255).
   */
  set(r, g, b) {
    this.r = this.clamp(r)
    this.g = this.clamp(g)
    this.b = this.clamp(b)
  }

  /**
   * Applies a hue rotation to the color.
   * @param {number} [angle=0] - Angle of rotation in degrees.
   */
  hueRotate(angle = 0) {
    angle = (angle / 180) * Math.PI
    const sin = Math.sin(angle)
    const cos = Math.cos(angle)

    this.multiply([
      0.213 + cos * 0.787 - sin * 0.213,
      0.715 - cos * 0.715 - sin * 0.715,
      0.072 - cos * 0.072 + sin * 0.928,
      0.213 - cos * 0.213 + sin * 0.143,
      0.715 + cos * 0.285 + sin * 0.14,
      0.072 - cos * 0.072 - sin * 0.283,
      0.213 - cos * 0.213 - sin * 0.787,
      0.715 - cos * 0.715 + sin * 0.715,
      0.072 + cos * 0.928 + sin * 0.072,
    ])
  }

  /**
   * Applies a grayscale effect to the color.
   * @param {number} [value=1] - Grayscale intensity (0 to 1).
   */
  grayscale(value = 1) {
    this.multiply([
      0.2126 + 0.7874 * (1 - value),
      0.7152 - 0.7152 * (1 - value),
      0.0722 - 0.0722 * (1 - value),
      0.2126 - 0.2126 * (1 - value),
      0.7152 + 0.2848 * (1 - value),
      0.0722 - 0.0722 * (1 - value),
      0.2126 - 0.2126 * (1 - value),
      0.7152 - 0.7152 * (1 - value),
      0.0722 + 0.9278 * (1 - value),
    ])
  }

  /**
   * Applies a sepia effect to the color.
   * @param {number} [value=1] - Sepia intensity (0 to 1).
   */
  sepia(value = 1) {
    this.multiply([
      0.393 + 0.607 * (1 - value),
      0.769 - 0.769 * (1 - value),
      0.189 - 0.189 * (1 - value),
      0.349 - 0.349 * (1 - value),
      0.686 + 0.314 * (1 - value),
      0.168 - 0.168 * (1 - value),
      0.272 - 0.272 * (1 - value),
      0.534 - 0.534 * (1 - value),
      0.131 + 0.869 * (1 - value),
    ])
  }

  /**
   * Applies a saturation effect to the color.
   * @param {number} [value=1] - Saturation intensity (0 to 1).
   */
  saturate(value = 1) {
    this.multiply([
      0.213 + 0.787 * value,
      0.715 - 0.715 * value,
      0.072 - 0.072 * value,
      0.213 - 0.213 * value,
      0.715 + 0.285 * value,
      0.072 - 0.072 * value,
      0.213 - 0.213 * value,
      0.715 - 0.715 * value,
      0.072 + 0.928 * value,
    ])
  }

  /**
   * Applies a matrix transformation to the color.
   * @param {number[]} matrix - A 3x3 matrix for color transformation.
   */
  multiply(matrix) {
    const newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2])
    const newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5])
    const newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8])
    this.r = newR
    this.g = newG
    this.b = newB
  }

  /**
   * Adjusts the brightness of the color.
   * @param {number} [value=1] - Brightness factor (0 to 1).
   */
  brightness(value = 1) {
    this.linear(value)
  }

  /**
   * Adjusts the contrast of the color.
   * @param {number} [value=1] - Contrast factor (0 to 1).
   */
  contrast(value = 1) {
    this.linear(value, -(0.5 * value) + 0.5)
  }

  /**
   * Applies a linear transformation to the color.
   * @param {number} [slope=1] - Slope of the linear transformation.
   * @param {number} [intercept=0] - Intercept of the linear transformation.
   */
  linear(slope = 1, intercept = 0) {
    this.r = this.clamp(this.r * slope + intercept * 255)
    this.g = this.clamp(this.g * slope + intercept * 255)
    this.b = this.clamp(this.b * slope + intercept * 255)
  }

  /**
   * Inverts the color.
   * @param {number} [value=1] - Inversion intensity (0 to 1).
   */
  invert(value = 1) {
    this.r = this.clamp((value + (this.r / 255) * (1 - 2 * value)) * 255)
    this.g = this.clamp((value + (this.g / 255) * (1 - 2 * value)) * 255)
    this.b = this.clamp((value + (this.b / 255) * (1 - 2 * value)) * 255)
  }

  /**
   * Converts the color to HSL format.
   * @returns {Object} HSL color object with h, s, and l properties in percentages.
   */
  hsl() {
    const r = this.r / 255
    const g = this.g / 255
    const b = this.b / 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h,
      s,
      l = (max + min) / 2

    if (max === min) {
      h = s = 0
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break

        case g:
          h = (b - r) / d + 2
          break

        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }

    return {
      h: h * 100,
      s: s * 100,
      l: l * 100,
    }
  }

  /**
   * Clamps the value between 0 and 255.
   * @param {number} value - The value to be clamped.
   * @returns {number} Clamped value.
   */
  clamp(value) {
    if (value > 255) {
      value = 255
    } else if (value < 0) {
      value = 0
    }
    return value
  }
}

/**
 * Solver class for optimizing color adjustments to match a target color.
 * @class Solver
 */
class Solver {
  /**
   * Creates an instance of the Solver class.
   * @param {Color} target - Target color to match.
   */
  constructor(target) {
    this.target = target
    this.targetHSL = target.hsl()
    this.reusedColor = new Color(0, 0, 0)
  }

  /**
   * Finds the best color adjustments to match the target color.
   * @returns {Object} Result object containing the best filter values, loss, and CSS filter string.
   */
  solve() {
    const result = this.solveNarrow(this.solveWide())
    return {
      values: result.values,
      loss: result.loss,
      filter: this.css(result.values),
    }
  }

  /**
   * Performs a wide search for optimal color adjustments.
   * @returns {Object} Best result of the wide search.
   */
  solveWide() {
    const A = 5
    const c = 15
    const a = [60, 180, 18000, 600, 1.2, 1.2]

    let best = { loss: Infinity }
    for (let i = 0; best.loss > 25 && i < 3; i++) {
      const initial = [50, 20, 3750, 50, 100, 100]
      const result = this.spsa(A, a, c, initial, 1000)
      if (result.loss < best.loss) {
        best = result
      }
    }
    return best
  }

  /**
   * Performs a narrow search for optimal color adjustments based on initial results.
   * @param {Object} wide - Result from the wide search.
   * @returns {Object} Best result of the narrow search.
   */
  solveNarrow(wide) {
    const A = wide.loss
    const c = 2
    const A1 = A + 1
    const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1]
    return this.spsa(A, a, c, wide.values, 500)
  }

  /**
   * Performs Simultaneous Perturbation Stochastic Approximation (SPSA) optimization.
   * @param {number} A - Initial value for perturbation.
   * @param {number[]} a - Array of perturbation scales.
   * @param {number} c - Perturbation scaling factor.
   * @param {number[]} values - Initial filter values.
   * @param {number} iters - Number of iterations for optimization.
   * @returns {Object} Best result containing optimized values and loss.
   */
  spsa(A, a, c, values, iters) {
    const alpha = 1
    const gamma = 0.16666666666666666

    let best = null
    let bestLoss = Infinity
    const deltas = new Array(6)
    const highArgs = new Array(6)
    const lowArgs = new Array(6)

    for (let k = 0; k < iters; k++) {
      const ck = c / Math.pow(k + 1, gamma)
      for (let i = 0; i < 6; i++) {
        deltas[i] = Math.random() > 0.5 ? 1 : -1
        highArgs[i] = values[i] + ck * deltas[i]
        lowArgs[i] = values[i] - ck * deltas[i]
      }

      const lossDiff = this.loss(highArgs) - this.loss(lowArgs)
      for (let i = 0; i < 6; i++) {
        const g = (lossDiff / (2 * ck)) * deltas[i]
        const ak = a[i] / Math.pow(A + k + 1, alpha)
        values[i] = fix(values[i] - ak * g, i)
      }

      const loss = this.loss(values)
      if (loss < bestLoss) {
        best = values.slice(0)
        bestLoss = loss
      }
    }
    return { values: best, loss: bestLoss }

    function fix(value, idx) {
      let max = 100
      if (idx === 2 /* saturate */) {
        max = 7500
      } else if (idx === 4 /* brightness */ || idx === 5 /* contrast */) {
        max = 200
      }

      if (idx === 3 /* hue-rotate */) {
        if (value > max) {
          value %= max
        } else if (value < 0) {
          value = max + (value % max)
        }
      } else if (value < 0) {
        value = 0
      } else if (value > max) {
        value = max
      }
      return value
    }
  }

  /**
   * Calculates the loss between the adjusted color and the target color.
   * @param {number[]} filters - Array of filter values.
   * @returns {number} Loss value.
   */
  loss(filters) {
    const color = this.reusedColor
    color.set(0, 0, 0)

    color.invert(filters[0] / 100)
    color.sepia(filters[1] / 100)
    color.saturate(filters[2] / 100)
    color.hueRotate(filters[3] * 3.6)
    color.brightness(filters[4] / 100)
    color.contrast(filters[5] / 100)

    const colorHSL = color.hsl()
    return (
      Math.abs(color.r - this.target.r) +
      Math.abs(color.g - this.target.g) +
      Math.abs(color.b - this.target.b) +
      Math.abs(colorHSL.h - this.targetHSL.h) +
      Math.abs(colorHSL.s - this.targetHSL.s) +
      Math.abs(colorHSL.l - this.targetHSL.l)
    )
  }

  /**
   * Generates a CSS filter string based on the filter values.
   * @param {number[]} filters - Array of filter values.
   * @returns {string} CSS filter string.
   */
  css(filters) {
    function fmt(idx, multiplier = 1) {
      return Math.round(filters[idx] * multiplier)
    }
    return `filter: invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(
      2,
    )}%) hue-rotate(${fmt(3, 3.6)}deg);`
  }
}

/**
 * Converts a hex color value to a CSS filter string that approximates the given hex color.
 * @param {string} val - Hex color value (e.g., "#ff0000").
 * @returns {string} CSS filter string that approximates the hex color.
 */
export function convCol(val) {
  const rgb = hexToRgb(val)
  if (rgb.length !== 3) {
    return
  }

  const color = new Color(rgb[0], rgb[1], rgb[2])
  const solver = new Solver(color)
  const result = solver.solve()
  const myres = JSON.stringify(result.filter).split(':')
  let str = myres[1].slice(0, -2)
  return str
}

/**
 * Converts a hex color value to an RGB array.
 * @param {string} hex - Hex color value (e.g., "#ff0000").
 * @returns {number[]} Array of RGB values or null if invalid hex value.
 */
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null
}
