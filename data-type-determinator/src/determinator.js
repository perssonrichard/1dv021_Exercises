/**
 * Determinator module.
 *
 * @module src/determinator
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a string indicating the type of the data sent to the function.
 *
 * @param {*} data The data whose type is to be returned.
 * @returns {string} The data type of the parameter.
 */
function tellType (data) {
  let result = 'You sent me '
  let type = typeof data

  if (type === 'number') {
    result += 'a number.'
  } else if (type === 'string') {
    result += 'a string.'
  } else if (type === 'boolean') {
    result += 'a boolean.'
  } else if (Array.isArray(data)) {
    result += 'an array.'
  } else if (type === 'function') {
    result += 'a function.'
  } else if (type === 'undefined') {
    result += 'an undefined value.'
  } else if (data === null) {
    result += 'a null value.'
  } else {
    result += 'an object.'
  }

  return result
}

exports.tellType = tellType
