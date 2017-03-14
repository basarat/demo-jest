# Serialize objects to JSON
> JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. Doing JSON serialization and deserialization in JavaScript and TypeScript is super easy as it is a format essentially designed for this language. This lesson covers the JSON primitive provided by JavaScript runtimes

JavaScript provides a native object called JSON that provides methods for parsing aka converting JSON strings to JavaScript objects.
And stringifying aka converting JavaScript objects to JSON strings.

```
JSON
```

Beyond these two methods, the JSON object has no functionality of its own.

Let’s create an object that we want to serialize:

```
const foo = {bar: 123};
```
The JSON representation of this object would be a string where each identifier is wrapped in double quotes
```
`{“bar”: 123}`
```
And indeed that is what `JSON.stringify(foo)` gives us
```ts
console.log(`{“bar”: 123}` === JSON.stringify(foo));
```
I'll just log out the string.

JSON stringify, will escape any quotes in objects keys as needed.
```
const foo = {[‘a”b’]: 123};
console.log(JSON.stringify(foo));
```
It will also escape quotes in any string values as needed.

```
const foo = {[‘a”b’]:’It”s okay’};
console.log(JSON.stringify(foo));
```

JSON is aware of the core native types and will pass them through as needed.

```js
const foo = {
  str: 'hello',
  num: 123,
  obj: {
    bar: 123
  },
  arr: ['pirate'],
  tru: true,
  fls: false,
  nul: null
};
```

* The `JSON.stringify` function takes three arguments, a `value`, a `replacer` and a `space`. (goto def)

The `space` can be used to customize the indentation of the output e.g.

* Passing in a string uses the string for indents e.g. '\t'
```js
console.log(JSON.stringify(foo, null, '\t'));
```

* Passing in a number uses that many spaces for indents e.g. 2 indents each section with 2 spaces.

```js
console.log(JSON.stringify(foo, null, 2));
```
* The replacer function can be used to customize the behavior e.g. if we have a key (i.e. we are not at the root) we can replace each value with the key, and for the root we will still use value:

```js
console.log(JSON.stringify(foo,
  (key, value) => key ? key : value,
  2));
```
Personally I do all my customizations in the object *before* passing it to stringify.

```js
console.log(JSON.stringify(foo,
  null,
  2));
```

JSON will also convert Dates to a sane string representation as needed e.g. we can wrap each key with

```js
const foo = {
  now: new Date()
};
```

Finally you can customize the JSON representation of any object by provided a `toJSON` property on the object. E.g.

```js
const foo = {
  foo: 'foo',
};
```
Vs.
```js
const foo = {
  foo: 'foo',
  toJSON: function() {
    return 'bar';
  }
};
```

Now lets talk about a few of the limitations of JSON stringify. Native types that don’t have a special representation for JSON will not serialize well e.g. regex

```
const foo = {
  foo: /hello/g
};
```

Functions cannot be serialized to JSON and are silently ignored

```
const foo = {
  foo: () => 'hello'
};
console.log(JSON.stringify(foo));
```

Finally you cannot serialize an object with cycles using JSON.stringify. As a demo
```
const foo = {
  foo: () => 'hello'
};
(foo as any).bar = foo;
console.log(JSON.stringify(foo,
  null,
  2));
```
