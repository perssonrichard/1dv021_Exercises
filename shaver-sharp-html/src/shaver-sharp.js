/**
 * shaverSharp module.
 *
 * @module src/shaver-sharp
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Creates the specified starting tag.
 *
 * @param {string} tagName tagName is a string that specifies the type of starting tag to be created.
 * @returns {string} Returns a starting tag as a string.
 */
function createBeginTag (tagName) {
  return `<${tagName}>`
}

/**
 * Creates the specified closing tag.
 *
 * @param {string} tagName tagName is a string that specifies the type of closing tag to be created.
 * @returns {string} Returns a closing tag as a string.
 */
function createEndTag (tagName) {
  return `</${tagName}>`
}

/**
 * Creates the specified element with content. If no content is specified a self-closing element will be created.
 *
 * @param {string} tagName tagName is a string that specifies the type of element to be created.
 * @param {string=} [innerHTML = ''] innerHTML is a string that describes the element's descendants.
 * @returns {string} Returns an element as a string.
 */
function createElement (tagName, innerHTML = '') {
  let result = ''

  if (innerHTML) {
<<<<<<< HEAD
    result += `${createBeginTag(tagName)}${innerHTML}${createEndTag(tagName)}`
  } else {
    result = '<' + `${tagName}` + ' />'
=======
    result += createBeginTag(tagName) + `${innerHTML}` + createEndTag(tagName)
  } else {
    result = createBeginTag(tagName).slice(0, -1) + ' />'
>>>>>>> 78a8225167ed1594d6ddf8025ea18d67ff11781f
  }
  return result
}

/**
 * Creates the specified elements with contents. If a tagName is not paired with a content a self-closing element
 * will be created.
 *
 * @param  {Array.<Object<string, string>>} elementData elementData is an array of objects.
 * @returns {string} Returns specified elements as a string.
 */
function createElements (elementData) {
  let result = ''

  elementData.forEach(function (value) {
    result += createElement(value.tagName, value.innerHTML)
  })
  return result
}

// Exports
exports.createBeginTag = createBeginTag
exports.createEndTag = createEndTag
exports.createElement = createElement
exports.createElements = createElements
