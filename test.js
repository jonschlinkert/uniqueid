/* global describe, it */

'use strict'

var assert = require('assert')
var uniqueid = require('./')

describe('uniqueId', function () {
  it('should generate sequences', function () {
    var seq = uniqueid()

    for (var i = 0; i < 20; i++) {
      assert.equal(String(i), seq())
    }
  })

  it('should accept prefixes', function () {
    var seq = uniqueid('pre')

    for (var i = 0; i < 20; i++) {
      assert.equal('pre' + i, seq())
    }
  })

  it('should accept suffixes', function () {
    var seq = uniqueid(null, 'suf')

    for (var i = 0; i < 20; i++) {
      assert.equal(i + 'suf', seq())
    }
  })

  it('should accept prefixes and suffixes', function () {
    var seq = uniqueid('pre', 'suf')

    for (var i = 0; i < 20; i++) {
      assert.equal('pre' + i + 'suf', seq())
    }
  })
})
