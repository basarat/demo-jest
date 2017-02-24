> Create a fluent API using TypeScript classes. 
> You can create an easy to chain API using TypeScript classes. Learn about the `this` return type annotation and how it plays with function chaining and class inheritance.

Here I have a simple class called Adder, 
* which has a private member called accumulator which I have initilized to 0. 
* It also has an add method which takes a value, adds it to the accumlator and returns this.
  * Returning `this` from a method allows us to chain additional instance members after a method invocation.
* Finally I will also add a result getter which simply returns the current accumulator.

```js
class Adder {
  protected accumulator = 0;
  add(value: number) {
    this.accumulator += value;
    return this;
  }
  get result() {
    return this.accumulator;
  }
}
```

Lets go ahead and create an instance of this class

```js
const result =  new Adder()
  .add
```

If I go ahead and access the `add` method, you can see that because it returned `this`, the return value here is an instance of the class `Adder`. That allows us to  chain method calls for the `add` method eg we can add 1 then add 10 then add 100

```js
const result =  new Adder()
  .add(1)
  .add(10)
  .add(100)
```

And whenever we want to get the result we simply use the result getter
```js
const result =  new Adder()
  .add(1)
  .add(10)
  .add(100)
  .result
```

If I go ahead and log this out and then run the file you can see the result of these additions is 111.

If you look at the inferred type annotation of the `add` function you can see that it returns `this`. You can annotate the return type as `: Adder` if you want but its not quite same the same as `: this` annotation, which is what TypeScript is inferring anyways so I'll remove my explicit annotation.

The purpose of the `this` return annotation becomes clear when you consider class inheritance. As an example 
* lets create a more powerful `Calculator` that extends the `Adder` class.
* We will go ahead and add another fluent API member called `subtract` which takes a value of type number. The method body subtracts this value from the inherited accumulator member and returns this.

```js
class Calculator extends Adder {
  subtract(value: number) {
    this.accumulator -= value;
    return this;
  }
}
```
Now lets go ahead and create an instance of this new calculator class. 
If we now access the inhertied `add` member, you will see the return type is inferred to be an instance of `Calculator` instead of `Adder`. That is because the `this` return type changes its meaning based how the function is invoked. Since it is invoked on a calculator TypeScript has gone ahead and inferred the return type to be a calculator.

```js
const result = new Calculator()
  .add
```

This allows you to chain calculator specific methods on the return of the inherited `add` method e.g. we can subtract and then add again and subtract and then get the result.

```js
const result = new Calculator()
  .add(1)
  .subtract(111)
  .add(10)
  .subtract(100)
  .result

console.log({ result })
```

it gives the result of the additions and subtracts as expected.
