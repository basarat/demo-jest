# Getting started with Jest using TypeScript
> Jest is a painless JavaScript unit testing framework from Facebook. It is designed to be super easy to setup and is packed full of powerful features. In this lesson we see how easy it is to add to your TypeScript project. This will be followed by a quick example application.

To add jest to a TypeScript project we will simply npm install `jest`, `@types/jest` and `ts-jest` saving them to our devDepenendencies.

```
npm i jest @types/jest ts-jest -D
```

* Next we will go ahead and copy the jest config for TypeScript from the official Jest website to our `package.json`. Once we paste it in we will delete any extra braces.

* As all our application code for this project is in the src directory we will also specify the roots that Jest should load tests from.
```json
"roots": [
  "<rootDir>/src"
],
```

* To make it easier to run tests using jest from the command line we will go ahead and add an npm test command that simply runs jest from the project's node_modules folder.

And we are done with our Jest configuration. Lets write some code and test it.

* Currently our projects main module is completely empty.

We will go ahead and export a sum function
* that takes a variable arguments of type number and returns their sum
* It uses the array.prototype.reduce function,
* at each step returning the sum of the accumulator and the current value, with the accumulator starting at 0.

```js
export const sum
  = (...a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);
```

Now lets write a unit test for this function using jest.

* Jest automatically picks up any files in the `__tests__` directory. (add the directory
* We will go ahead and create a test file for our main module.
* We will bring in the sum function from our main module
* Create a basic test.
* And in that test we will expect the sum of zero arguments to be 0.
* The test function and the `expect` function are coming from Jest and thanks to its TypeScript definition we get to use them with autocomplete and compile time type checking.

```js
import { sum } from '../';

test('basic', () => {
  expect(sum()).toBe(0);
})
```

We can run these tests from the terminal by simply running `npm t` which runs the `test` target in our package.json. And as you can see our passing test passed with flying colors.

You can even run the test in watch mode using `npm t -- --watchAll` passing in an additional argument to jest `watchAll`.

Now if we go ahead and duplicate our test changing adding a check for two number.

```js
test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
})
```

Jest automatically picks up the new test, run it, and you can see that it passed as expected.
