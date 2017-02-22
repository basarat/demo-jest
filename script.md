> NOTES: 
- advantage 1: you get to use the latest JavaScript features e.g. arrow functions, ES6 exports, ES6 imports
- advantage 2: Syntactic checking. `asdf!@#`
- advantage 3: autocomplete (e.g. autocomplete the log function)


Here I have a simple log function that logs hello world, exported from utils.js
```
module.exports.log = function() {
  console.log('hello world');
}
```

I will go ahead and create a demo file that requires this function and uses it.
```
const utils = require('./utils');

utils.log();
```
Note that this is all just pure Node style JavaScript. Your can actually use TypeScript as a transpiler for pure JavaScript projects simply by adding a tsconfig.json file. 

Within our tsconfig.json file we set our target, the magic compiler option `"allowJs": true` which tells TypeScript to also support raw `.js` files, and `outDir` to provide an alternate location for *transpiled JavaScript*. Finally we include all the files in the src directory.

Now once I set this as my active project you can see that TypeScript picks up these source files, and I can even build these to our output `lib` directory.