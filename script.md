> Using ES6, ES2015, ESNext with TypeScript
> TypeScript is very particular about what is and isn't allowed in a TS file to protect you from common developer errors. By default if you set the compile target to ES5 it only allows you to use globally defined variables that were availble in the ES5 timeframe. That said it is super easy to configure TypeScrit to use ES6 or ESNext using the `lib` option. We also cover how to make sure that these features work across the widest range of browsers using a simple polyfill.


We have a simple tsconfig.json with target set to ES5:

```json
{
  "compilerOptions": {
    "target": "es5",
    "outDir": "lib"
  },
  "include": [
    "src"
  ],
  "compileOnSave": false
}
```


Because the target is ES5 TypeScript will happly allow us to use ES5 features. e.g. lets go ahead and create an index.ts file 

```
[1, 2, 3].map(item => console.log(item));
```

It works at compile time and runtime just fine. (show demo)

Because we set the target in our `tsconfig.json` file TypeScript will compile any ES6 syntax into ES5 syntax e.g. an arrow function

```js
const foo = () => null;
```
get compiled down to be just a simple function that does the same thing. However a side effect of using the ES5 target is that we are not allowed to use runtime features that are not available in common ES5 enviroments. For example if we try to return a Promise from our function 

```js
const foo = () => Promise.resolve(123);
```
TypeScript complains `cannot find name Promise`. We can still keep our target as ES5 but tell TypeScript to allow rutime features of other enviroments using the `lib` option in our tsconfig.json. We jump in to our tsconfig.json, set the `lib` option to include `es6`

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
  ],
  "compileOnSave": false
}
```
and now you can see that the error goes away. If you are building an NPM pacakge this would be okay. However if you are targeting using browsers i.e. building an application instead of a library you might also want to polyfill the new ES enviroment features like `Promise`, `Map` etc. The simplest way to do that is to simply install a wholesale polyfill called `corejs`. We can install it using npm

```
npm install core-js --save-dev
```

Once the install is done you simply import `'core-js/shim'` into your main module to make sure that all the latest ES features are available when the application is used by old browsers.