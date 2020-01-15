/**
 * My-array module.
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a numerically sorted copy of an array.
 *
 * @param {Number[]} source The array to create a sorted copy of.
 * @throws {TypeError} The source parameter must be an Array.
 * @returns {Number[]} A sorted copy of the source array.
 */
function immutableSort (source) {
  let copy = source.slice()
  let sortedCopy = copy.sort(function (a, b) { return a - b })

  if (!Array.isArray(source)) {
    throw new TypeError('Source is not an array.')
  } else {
    return sortedCopy
  }
}

/**
 * Returns a numerically sorted copy (descending order) of an array.
 *
 * @param {Number[]} source The array to create a sorted copy of.
 * @throws {TypeError} The source parameter must be an Array.
 * @returns {Number[]} A sorted copy (descending order) of the source array.
 */
function immutableSortDescending (source) {
  let copy = source.slice()
  let sortedCopy = copy.sort(function (a, b) { return b - a })

  if (!Array.isArray(source)) {
    throw new TypeError('Source is not an array.')
  } else {
    return sortedCopy
  }
}

exports.immutableSort = immutableSort
exports.immutableSortDescending = immutableSortDescending
