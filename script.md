> Using ES6 and ESNext with TypeScript
> TypeScript is very particular about what is and isn't allowed in a TS file to protect you from common developer errors. By default if you set the compile target to ES5 it only allows you to use globally defined variables that were available in the ES5 time-frame. That said it is super easy to configure TypeScript to use ES6 or ESNext using the `lib` option. 

> We also cover how to make sure that these features work across the widest range of browsers using a simple polyfill.


We have a simple tsconfig.json with compiler options specifying a target of ES5, an output directory and all our source files

```json
{
  "compilerOptions": {
    "target": "es5",
    "outDir": "lib"
  },
  "include": [
    "src"
  ]
}
```


Now lets go ahead and create an index.ts source file. Because the target is ES5, TypeScript will happly allow us to use ES5 features. e.g. we can use the Array prototype map function. 

```
[1, 2, 3].map(item => console.log(item));
```

The main effect of specifying `target: es5` in our compiler options is that if we try to use any ES6 syntax TypeScript will go ahead and transpile it to an ES5 syntax. e.g. if we have a simple an arrow function that returns null

```js
const foo = () => null;
```
TypeScript will transpile it to a simple function that does the same thing. However a side effect of using the ES5 target is that we are not allowed to use runtime features that are not available in common ES5 enviroments. For example if we try to return a Promise from our function 

```js
const foo = () => Promise.resolve(null);
```
TypeScript complains `cannot find name Promise`. This is TypeScript simply protecting us from writing code that will not work in an ES5 enviroment.

We can still keep our target as ES5 but tell TypeScript to allow runtime features of other enviroments using the `lib` option in our tsconfig.json. 

Here we tell typescript to include the standard dom enviroment and allow all runtime JavaScript features that are available uptil `es6`.

```json
{
  "compilerOptions": {
    "target": "es5",
    "outDir": "lib",
    "lib": [
      "dom",
      "es6"
    ]
  },
  "include": [
    "src"
  ]
}
```
As soon as we do that you can now see that TypeScript no longer complains if we try to use Promises.


If you are building an NPM pacakge this would be okay. However if you are targeting browsers i.e. building an application instead of a library ,you might also want to polyfill these new features like `Promise`, `Map`, `Set` etc. The simplest way to do that is to simply install the polyfill called `core-js`. We can install it using npm

```
npm install core-js --save-dev
```

Once the install is done you simply include it in your application by importing `'core-js/shim'` into your main module to make sure that all the latest ES features are available when the application is used by old browsers.

One final thing worth mentioning is that as new JavaScript features become available you can change your lib to target them e.g. "es2017". 

When you do that be sure to check if the feature you want is actually supported by corejs using the handy EcmaScript compatibility table for TypeScript + CoreJS http://kangax.github.io/compat-table/es6/#typescript for example here we can see that Promise is safe to use for non-obsolete platforms when using TypeScript with CoreJS.