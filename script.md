> Using TypeScript for pure JavaScript
> TypeScript can actually be used just as a JavaScript Transpiler. This allows you to easily maintain your old JavaScript code base along with potentially uplifting to a TypeScript one.

Here I have a simple log function exported from utils.js used in a js file
```
exports.log = function() {
  console.log('hello world');
}
```

We can go easily go ahead and create a another JavaScript file that requires this utils file and uses its log function
```
const utils = require('./utils');

utils.log();
```
Note that this is all just pure vanilla Node style JavaScript. Your can actually use TypeScript as a transpiler for pure JavaScript projects simply by adding a tsconfig.json file. 

We will use this file to configure the TypeScript compiler options. We set our transpilation output target to ES5, We set `"allowJs": true` which tells the TypeScript compiler to also support raw `.js` files, and an `outDir` to provide the output location for *transpiled JavaScript*. Finally we include all the files in the src directory.

```
{
  "compilerOptions": {
    "target": "es5",
    "allowJs": true,
    "outDir": "lib"
  },
  "include": [
    "src"
  ]
}
```

Now if I go ahead and set this tsconfig as my active project you can see that the TypeScript compiler picks up these js files in our source directory as indicated by the green highlighting, and I can even go ahead and transpile these JavaScript files to our output `lib` directory.

One advantage of using TypeScript as a transpiler in this way is that you get to use the latest JavaScript features e.g. 

arrow functions 
```js
exports.log = () => {
  console.log('hello world');
}
```
ES6 exports 
```js
export const log = () => {
  console.log('hello world');
}
```
Similarly I can use es6 imports to use the log function from the utils module
```js
import { log } from './utils';
log();
```
and of course this shows another great reason to use TypeScript for JS files, which is its excellent autocomplete.

Additionally for raw JavaScript files, TypeScript also gives you Syntactic checking to protect against simple errors.
```js
import { log } from './utils';
log();

asdf!@#
```

And finally you have the ability to mix and match JavaScript and TypeScript in the same project. If I go ahead and change the file extension from `js` to `ts` it opens up advanced TypeScript analysis. Mixing .js and .ts files this way allows you to incrementally upgrade your code base towards greater type safety provided by `.ts` files.