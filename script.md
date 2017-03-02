> Variable scope in TypeScript
> There are a lot of ways to define variables in TypeScript. In this lesson we discuss variable scope which determines all the places where a particular variable can be used.

You can define a variable in TypeScript using `var`, `let`, `const`, `function`, `class`, `namespace`, `enum`.

```js
var foo = 123;
let bar = 123;
const baz = 123;
function qux(){}
class Dave {}
namespace Matt {}
```

`var` is something that should be considered legacy and not used in any new code base. Unlike other variables, `var` is *function* scoped. A block has no impact on a var. This can be demonstrated by trying to recreate a var in a block

```js
var foo = 123; 
{
  var foo = "something"; // Error 
}
console.log(foo)
```
Fortunately TypeScript gives an error in this case as the inferred type of `foo` based on the first line does not match the value we try to assign in line 3. But if you made the mistake of assigning the same type TypeScript will not complain.

```js
var foo = 123; 
{
  var foo = 456; // No Error 
}
console.log(foo)
```


TODO: mention creating a scope in switch. 