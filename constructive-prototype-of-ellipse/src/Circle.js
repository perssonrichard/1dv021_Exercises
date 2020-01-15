'use strict'

const Ellipse = require('./Ellipse')

/**
 * Creates a circle.
 *
 *
 * @param {number} radius -
 */
function Circle (radius) {
  Ellipse.call(this, radius, radius)

  Object.defineProperty(this, 'radius', {
    writable: true,
    configurable: true,
    enumerable: true,
    get function () {
      return this.a
    },
    set: function (value) {
      this.a = this.b = value
    }
  })
}

Circle.prototype = Object.create(Ellipse.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.toString = function () {
  return `radius: ${this.radius}, area: ${this.getArea().toFixed(1)}, circumference: ${this.circumference().toFixed(1)}`
}

module.exports = Circle
