import { convCol } from './css-filter'

/**
 * @class uiHelper
 * @description set of functions used to manipulate UI
 * @author Thulisha Reddy Technologies
 */

/**
 * Set colors
 * @function mainUILoad
 * @description sets colors to the theme being used
 * @param {string} primary primary color to be used by theme
 * @param {string} secondary secondary color to be used by theme
 * @param {string} favicon favicon to be inserted into html head tag
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
 * unload css files
 * @function unloadCSS
 * @description css files unloaded from html
 */
export function unloadCSS() {
  var links = document.querySelectorAll('link[type="text/css"]')
  var linksArray = Array.prototype.slice.call(links)
  linksArray.forEach(function (child) {
    child.parentNode.removeChild(child)
  })
}

/**
 * check if json is valid
 * @function isValidJsonString
 * @description verity if json is valid
 */
export const isValidJsonString = (str) => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}
