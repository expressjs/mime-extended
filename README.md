
DEPRECATED - Please use [mime-types](https://github.com/expressjs/mime-types) instead.

# MIME EXTENDED

Extends the [mime](https://github.com/broofa/node-mime) module with two main features:

- Adds some content types for preprocessor/transpiler languages
- Adds `mime.contentType()`

## Additional types

Checkout [lib/types.json](lib/types.json) for additional content types.
Feel free to make PRs to add your own!

## `mime.contentType(type)`

An easy way to create a `content-type` header just by setting an extension or mime type,
just like how Express and Koa works!

```js
mime.contentType('html') // => text/html; charset=utf-8
mime.contentType('json') // => application/json
```

## Notes

This augments the `mime` module globally.
It also loosely depends on `mime`,
so you might want to pin `mime` in your app.
