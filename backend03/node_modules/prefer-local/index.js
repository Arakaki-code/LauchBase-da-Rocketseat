const has = require('lodash.has')
const get = require('lodash.get')

/**
 * If an Object have an inner property with a boolean value
 * and have a global value then returns a boolean value
 * preferring inner property over global.
 *
 * @param {object}  src  source object containing inner property
 * @param {string}  key  key of the inner property
 * @param {boolean} prop value of global property
 *
 * @returns {boolean}
 */
module.exports = (src, key, prop) => {
  let propExist = has(src, key)
  return (propExist && get(src, key)) || (!propExist && prop)
}
