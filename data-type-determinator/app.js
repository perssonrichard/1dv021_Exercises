/**
 * The starting  point of the application.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const determinator = require('./src/determinator')

console.log(determinator.tellType('Fly, you fools!'))
console.log(determinator.tellType(true))
console.log(determinator.tellType(11))
console.log(determinator.tellType({}))
console.log(determinator.tellType([1]))
console.log(determinator.tellType(function () {}))
console.log(determinator.tellType())
console.log(determinator.tellType(null))
