# catch-err-msg

[![Build Status](https://github.com/mgenware/catch-err-msg/workflows/Build/badge.svg)](https://github.com/mgenware/catch-err-msg/actions)
[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/catch-err-msg)
[![npm version](https://img.shields.io/npm/v/catch-err-msg.svg?style=flat-square)](https://npmjs.com/package/catch-err-msg)
[![Node.js Version](http://img.shields.io/node/v/catch-err-msg.svg?style=flat-square)](https://nodejs.org/en/)

Helper function to extract error message for TypeScript 4.4+ `catch` clause.

```ts
import errMsg from 'catch-err-msg';

try {
  // ...
} catch (err) {
  // err: unknown in TypeScript 4.4+
  const message = errMsg(err);
  console.error(message);
}
```

## Source

```ts
export default function errMsg(err: any): string {
  return err?.message ? `${err.message}` : `${err}`;
}
```
