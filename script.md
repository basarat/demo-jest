# Getting started with Jest using TypeScript
> Jest is a painless JavaScript unit testing framework from Facebook. It is desinged to be super easy to setup and is packed full of powerfull features. In this lesson we see how easy it is to add to your TypeScript project.

Here we have a simple TypeScript project. In our main module we will go ahead and export a sum function that takes numbers and returns their sum.

```js
export const sum
  = (...a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);
```

* Jest automatically picks up any files with a `.test.ts` extension as well as any files in the `__tests__` directory. (add the directory
* We will go ahead and create a test file for our main module 

```js
import { sum } from '../index';

test('basic', () => {
  expect(sum()).toBe(0);
});
```

Now we can run this test using `npm test`. You can even run the test in watch mode using `npm test -- --watchAll`. 

```js
  expect(sum(1, 2)).toBe(3);
```
