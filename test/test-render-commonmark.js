var assert = require('assert')
var texme = require('../texme.js')

describe('renderCommonMark', function () {
  before(function () {
    // Ensure that commonmark is loaded.
    texme.main()
  })

  it('simple', function () {
    var input = '*Foo* **Bar** `Baz`'
    var expected = '<p><em>Foo</em> <strong>Bar</strong> <code>Baz</code></p>\n'
    assert.deepStrictEqual(texme.renderCommonMark(input), expected)
  })
})
