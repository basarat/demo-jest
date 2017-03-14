const foo = {
  foo: () => 'hello'
};
(foo as any).bar = foo;
console.log(JSON.stringify(foo,
  null,
  2));