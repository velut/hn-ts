# hn-ts

[![Build status](https://img.shields.io/github/workflow/status/velut/hn-ts/CI)](https://github.com/velut/hn-ts/actions?query=workflow%3ACI)
[![Coverage](https://img.shields.io/codecov/c/gh/velut/hn-ts)](https://codecov.io/gh/velut/hn-ts)
[![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue)](https://www.jsdocs.io/package/hn-ts)
![Language](https://img.shields.io/github/languages/top/velut/hn-ts)
[![npm bundle size](https://img.shields.io/bundlephobia/min/hn-ts)](https://bundlephobia.com/result?p=hn-ts)
[![npm](https://img.shields.io/npm/v/hn-ts)](https://www.npmjs.com/package/hn-ts)
[![License](https://img.shields.io/github/license/velut/hn-ts)](https://github.com/velut/hn-ts/blob/main/LICENSE)

A TypeScript client for the [Hacker News API](https://github.com/HackerNews/API).

## Features

-   Fully typed API and response data
-   Well documented and tested

## API & Package Info

-   [Explore the package API on **jsDocs.io**](https://www.jsdocs.io/package/hn-ts)
-   [View package contents on **unpkg**](https://unpkg.com/hn-ts/)
-   [View repository on **GitHub**](https://github.com/velut/hn-ts)

## Install

Using `npm`:

```
npm i hn-ts
```

Using `yarn`:

```
yarn add hn-ts
```

## Usage Examples

Get the ID of the latest item created on HN:

```typescript
import { getMaxItemId } from 'hn-ts';

(async () => {
  const id = await getMaxItemId();

  // Output: a number like `27107832`
  console.log(id);
})();
```

Get the item (story, comment, job, poll or poll option) with the given ID:

```typescript
import { getItemById } from 'hn-ts';

(async () => {
  const item = await getItemById({
    id: 27107832,
  });

  // Output: `27107832`
  console.log(item.id);

  // Output: `story`
  console.log(item.type);

  // Output: `velut`
  console.log(item.author);
})();
```

Get the user with the given name:

```typescript
import { getUserById } from 'hn-ts';

(async () => {
  const user = await getUserById({
    id: "velut",
  });

  // Output: `velut`
  console.log(user.id);
})();
```

## License

MIT License

Copyright (c) 2021 Edoardo Scibona

See LICENSE file.
