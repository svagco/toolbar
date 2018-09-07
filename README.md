# @svag/toolbar

[![npm version](https://badge.fury.io/js/@svag/toolbar.svg)](https://npmjs.org/package/@svag/toolbar)

`@svag/toolbar` is A macOS toolbar.

```sh
yarn add -E @svag/toolbar
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`toolbar(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
- [TODO](#todo)
- [Copyright](#copyright)

## API

The package is available by importing its default function:

```js
import toolbar from '@svag/toolbar'
```

### `toolbar(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

```js
/* yarn example/ */
import toolbar from '@svag/toolbar'

(async () => {
  await toolbar()
})()
```

## TODO

- [ ] Add a new item to the todo list.

## Copyright

(c) [SVaG][1] 2018

[1]: https://svag.co
