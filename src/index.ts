const foo = {
  foo: 'foo'
};
(foo as any).bar = foo;
console.log(JSON.stringify(foo,
  null,
  2));