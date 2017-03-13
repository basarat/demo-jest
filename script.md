> Coding Interview: FizzBuzz

> The FizzBuzz problem is commonly presented as the lowest level of comprehension required to illustrate adequacy in computer programming.

> In this lesson you learn about the problem as well as its solution in TypeScript.

You can define a variable in TypeScript using `var`, `let`, `const`, `function`, `class`, `namespace`, `enum`.

```js
/**
 * Write a program that prints the integers from 1 to 100 (inclusive).
 * But:
 *  - for multiples of three, print Fizz (instead of the number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz (instead of the number)
 */
```
It is always a good idea in a coding interview to do a quick run of expected results without actually writing any code.

Here you can go ahead and write down the expected results upfront:

```js
/**
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 */
```
With this understanding in your head. You can jump into the code. The first requirement is to print numbers from 1 to 101, Just need a for loop

```js
for (let index = 1; index < 101; index++) {

}
```
And then log out the index.
```js
for (let index = 1; index < 101; index++) {
  console.log(index);
}
```
Next requirement is for multiples of 3 print `Fizz`. Easy as:

```js
for (let index = 1; index < 101; index++) {
  if (index % 3 == 0) {
    console.log('Fizz');
  }
  else {
    console.log(index);
  }
}
```
For multiples of 5 print Buzz. We can easily do that with another if:
```js
  if (index % 3 === 0) {
    console.log('Fizz');
  }
  else if (index % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(index);
  }
```
Now for the final condition, It is intentionally provided last to throw off new programmers that might just think (oh another condition, so another if else) `if (index % 3 === 0 && index % 5 === 0)` However this condition cannot be true if any of the previous conditions are true. So we simply move this condition on top.

```
if (index % 3 === 0 && index % 5 === 0) {
  console.log('FizzBuzz');
}
```

And now we have a working FizzBuzz.

```js
for (let index = 1; index < 101; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log('FizzBuzz');
  }
  else if (index % 3 === 0) {
    console.log('Fizz');
  }
  else if (index % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(index);
  }
}
```

A common additional request is to only do the math once. It is quite easy to do by simply copying these remainder checks and storing them in semantic names `isFizz` and `isBuzz`. Next we use these variables in our code.

```js
for (let index = 1; index < 101; index++) {
  const isFizz = index % 3 === 0;
  const isBuzz = index % 5 === 0;
  if (isFizz && isBuzz) {
    console.log('FizzBuzz');
  }
  else if (isFizz) {
    console.log('Fizz');
  }
  else if (isBuzz) {
    console.log('Buzz');
  }
  else {
    console.log(index);
  }
}
```

Another request is to remove the `console.log` duplication. You can do that by storing the result in a variable and logging out the result.

```js
for (let index = 1; index < 101; index++) {
  const isFizz = index % 3 === 0;
  const isBuzz = index % 5 === 0;
  let result;
  if (isFizz && isBuzz) {
    result = 'FizzBuzz';
  }
  else if (isFizz) {
    result = 'Fizz';
  }
  else if (isBuzz) {
    result = 'Buzz';
  }
  else {
    result = index;
  }
  console.log(result);
}
```
With code like this the interviewer might ask you to remove the mutation in `result` and go with a more functional approach. They might even give you the hint to use the `conditional ternary` operator.

* An `if/else` chain with single assignment statements can always be converted into a ternary chain.

* If bla bla then bla bla otherwise check bla bla then bla bla otherwise

Final result:

```js
for (let index = 1; index < 101; index++) {
  const isFizz = index % 3 === 0;
  const isBuzz = index % 5 === 0;
  const result = (isFizz && isBuzz)
    ? 'FizzBuzz'
    : isFizz
      ? 'Fizz'
      : isBuzz
        ? 'Buzz' : index
  console.log(result);
}
```
