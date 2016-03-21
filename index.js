'use strict'

/**
 * Generate a function for sequences of re-usable IDs.
 *
 * @param prefix {string}
 * @param suffix {string}
 * @returns {Function}
 */
module.exports = function (prefix, suffix) {
  var id = 0

  prefix = prefix || ''
  suffix = suffix || ''

  return function () {
    return prefix + (id++) + suffix
  }
}
