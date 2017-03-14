# Serialize objects to JSON
> JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. 

> Doing JSON serialization and deserialization in JavaScript and TypeScript is super easy as it is a format essentially designed for this language. This lesson covers the JSON.stringify primitive provided by JavaScript runtimes.

JavaScript provides a native object called JSON that provides methods for
* parsing i.e the process of converting JSON strings to JavaScript objects.
* And stringifying i.e. the process of converting JavaScript objects to JSON strings.

```js
JSON
```

Beyond these two methods, the JSON object has no additional functionality. For serialization to JSON strings we use JSON.stringify.

To demonstrate JSON stringify, let create an example object foo with a property bar set to the number 123,

```js
const foo = {
  bar: 123
};
```
The JSON representation of this object would be a string where each key is wrapped in double quotes
```js
`{“bar”: 123}`
```
And indeed that is exactly the string returned by calling `JSON.stringify(foo)` on this object.
```js
console.log(`{“bar”: 123}` === JSON.stringify(foo));
```
I'll just log out the string from now on.

JSON stringify, will escape any characters that need escaping  e.g. double quotes in objects keys.
```js
const foo = {[‘a”b’]: 123};
console.log(JSON.stringify(foo));
```
Similarly it will also escape characters in string values if needed.

```js
const foo = {[‘a”b’]:’It”s okay’};
console.log(JSON.stringify(foo));
```

JSON stringify is aware of the following core native types
`str`, `num`, objects which in term contain other serializable values, arrays which contain other serializable values, booleans and null.

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
* By default JSON stringify serializes the object into a single line string with zero spaces.

* To allow you to format the output string a bit better `JSON.stringify` function takes two additional arguments, a `value`, a `replacer` and a `space`. (goto def)

The `space` argument can be used to customize the indentation of the output e.g.

* Passing in a string uses that string for indents e.g. you can pass in a tab character '\t'
```js
console.log(JSON.stringify(foo, null, '\t'));
```
* Passing in a number for the space argument, uses that many spaces for indents e.g. the number `2` indents each section with 2 spaces.

```js
console.log(JSON.stringify(foo, null, 2));
```
* The replacer argument function can be used to customize the behavior for particular keys and value e.g. if we have a key (i.e. we are not at the root) we can replace each value with the key, and for the root we will still use value:

```js
console.log(JSON.stringify(foo,
  (key, value) => key ? key : value,
  2));
```
This results in all values other than the root getting replaced by their keys.

Personally I do all my customizations in the object *before* passing it to stringify and have the replacer argument as null.

```js
console.log(JSON.stringify(foo,
  null,
  2));
```

JSON stringify will also convert JavaScript Date objects to an ISO 8601 string representation, which is excellent for transferring date time information.

```js
const foo = {
  now: new Date()
};
```

Underneath it works simply by calling the native Date objects toJSON method which returns the same string.
```js
const foo = {
  now: new Date().toJSON(),
};
```
You can provide the toJSON method to customize the JSON seriliazation for your objects as well. e.g. here we have a simple object with the property foo that serializes to the string as expected.

```js
const foo = {
  foo: 'foo',
};
```
You can override this output by providing a toJSON method and now the object seriliazes to the string returned by toJSON.
```js
const foo = {
  foo: 'foo',
  toJSON: () => 'bar',
};
```

Now lets talk about a few of the limitations of JSON stringify. Native types that don’t have a special representation for JSON will not serialize well e.g. native regular expression do not serialize well by default.

```js
const foo = {
  foo: /hello/g
};
```

Function cannot be serialized to JSON values and therefore keys pointing to functions are silently ignored by JSON stringify.

```js
const foo = {
  foo: () => 'hello'
};
console.log(JSON.stringify(foo));
```

Finally the biggest limitation of JSON stringify is that it cannot serialize an object with cycles and cyclic references.

e.g. here we have an object foo with a property bar pointing back to foo. JSON stringify will throw a runtime error in this case.
```js
const foo = {
  foo: () => 'hello'
};
(foo as any).bar = foo;
console.log(JSON.stringify(foo,
  null,
  2));
```
