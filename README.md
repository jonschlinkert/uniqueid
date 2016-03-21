# `uniqueid`

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Generate sequential IDs, with optional prefix or suffix.

## Installation

```bash
npm i uniqueid --save-dev
```

## Usage

```js
var uniqueid = require('uniqueid')
var first = uniqueid('prefix')
var second = uniqueid(null, 'suffix')

console.log(first()) //=> "prefix0"
console.log(second()) //=> "0suffix"
console.log(first()) //=> "prefix1"
console.log(second()) //=> "1suffix"
```

* **prefix** Set the prefix for id generation (string, default: `''`)
* **suffix** Set the suffix for id generation (string, default: `''`)

## Typings

Includes a [TypeScript definition](index.d.ts).

## Contributing

```bash
npm install
npm test
```

## License

Copyright (c) 2014 Jon Schlinkert, contributors.

Released under the MIT license

[npm-image]: https://img.shields.io/npm/v/uniqueid.svg?style=flat
[npm-url]: https://npmjs.org/package/uniqueid
[downloads-image]: https://img.shields.io/npm/dm/uniqueid.svg?style=flat
[downloads-url]: https://npmjs.org/package/uniqueid
[travis-image]: https://img.shields.io/travis/jonschlinkert/uniqueid.svg?style=flat
[travis-url]: https://travis-ci.org/jonschlinkert/uniqueid
[coveralls-image]: https://img.shields.io/coveralls/jonschlinkert/uniqueid.svg?style=flat
[coveralls-url]: https://coveralls.io/r/jonschlinkert/uniqueid?branch=master
