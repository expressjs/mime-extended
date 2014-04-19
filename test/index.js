
var assert = require('assert')

var mime = require('..')

describe('Extensions', function () {
  it('.jade', function () {
    assert.equal(mime.lookup('jade'), 'text/jade')
    assert.equal(mime.lookup('.jade'), 'text/jade')
    assert.equal(mime.lookup('file.jade'), 'text/jade')
    assert.equal(mime.lookup('/some/file.jade'), 'text/jade')
  })
})

describe('.contentType()', function () {
  it('html', function () {
    assert.equal(mime.contentType('html'), 'text/html; charset=utf-8')
  })

  it('text/html; charset=ascii', function () {
    assert.equal(mime.contentType('text/html; charset=ascii'), 'text/html; charset=ascii')
  })

  it('json', function () {
    assert.equal(mime.contentType('json'), 'application/json')
  })

  it('application/json', function () {
    assert.equal(mime.contentType('application/json'), 'application/json')
  })
})
