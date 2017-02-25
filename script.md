> Using ES6, ES2015, ESNext with TypeScript
> TypeScript is very particular about what is and isn't allowed in a TS file to protect you from common developer errors. By default if you set the compile target to ES5 it only allows you to use globally defined variables that were availble in the ES5 timeframe. That said it is super easy to configure TypeScrit to use ES6 or ESNext using the `lib` option. We also cover how to make sure that these features work across the widest range of browsers using a simple polyfill.


We have a simple tsconfig.json with target set to ES5:

```
{
  "compilerOptions": {
    "target": "es5"
  },
  "compileOnSave": false
}
```


Because the target is ES5 TypeScript will happly allow us to use ES5 features. e.g. lets go ahead and create an index.ts file 

```
[1, 2, 3].map(item => console.log(item));
```

It works at compile time and runtime just fine. (show demo)


TODO: Promise