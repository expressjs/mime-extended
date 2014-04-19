
var mime = module.exports = require('mime')

require('./types.json').forEach(function (type) {
  var obj = {}
  obj[type.type] = [type.ext]
  mime.define(obj)
})

mime.contentType = function mime_contentType(type) {
  if (!~type.indexOf('/')) type = mime.lookup(type)
  if (!~type.indexOf('charset')) {
    var charset = mime.charsets.lookup(type)
    if (charset) type += '; charset=' + charset.toLowerCase()
  }
  return type
}
