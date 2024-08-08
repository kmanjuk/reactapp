import { convCol } from './css-filter'

/**
 * Sets colors for the theme.
 *
 * @param {string} primary - The primary color to be used by the theme.
 * @param {string} secondary - The secondary color to be used by the theme.
 * @param {string} favicon - The favicon to be inserted into the HTML head tag.
 */
export const mainUILoad = (primary, secondary, favicon) => {
  const favLink = document.getElementById('faviconLink') || ''
  favLink.setAttribute('href', favicon)
  document.body.classList.add('vertical-layout')
  const col1 = convCol(secondary)
  const col2 = convCol(primary)

  document.documentElement.style.setProperty('--mainPrimaryCol', primary)
  document.documentElement.style.setProperty('--mainPrimaryColHover', primary)

  document.documentElement.style.setProperty('--primaryCol', col1)
  document.documentElement.style.setProperty('--primaryCol-hover', col2)
}

/**
 * Unloads CSS files from the HTML document.
 */
export function unloadCSS() {
  var links = document.querySelectorAll('link[type="text/css"]')
  var linksArray = Array.prototype.slice.call(links)
  linksArray.forEach(function (child) {
    child.parentNode.removeChild(child)
  })
}

/**
 * Checks if a string is a valid JSON string.
 *
 * @param {string} str - The string to be checked.
 * @returns {boolean} True if the string is valid JSON, false otherwise.
 */
export const isValidJsonString = (str) => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}
