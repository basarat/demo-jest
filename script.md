# Getting started with Jest using TypeScript
> Jest is a painless JavaScript unit testing framework from Facebook. It is desinged to be super easy to setup and is packed full of powerfull features. In this lesson we see how easy it is to add to your TypeScript project.

Here we have a simple TypeScript project. In our main module we will go ahead and export a sum function that takes numbers and returns their sum.

```js
export const sum
  = (...a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);
```