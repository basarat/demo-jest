> Creating a fluent API using TypeScript classes

Here I have a simple class called Adder, 
* which has a private member called accumulator which I have initilized to 0. 
* It also has an add method which takes a value, adds it to the accumlator and returns this. 
* I will also add a result getter which simply returns the current accumulator.

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

The interesting member in the adder class is the add method. Because it returns `this` the return value is an instance of the class `Adder` and we can essentially chain calls in the adder instance, eg 

```js
const result =  new Adder()
  .add(1)
  .add(10)
  .add(100)
```

And whenever we want the result we simply use the result getter
```js
const result =  new Adder()
  .add(1)
  .add(10)
  .add(100)
  .result
```

If I go ahead and log this out and then run the file you can see the result is 111.

If you look at the inferred type annotation of the `add` function you can see that it returns `this`. You can annotate the return type as `: Adder` if you want but its not quite same the same as `: this` annotation, which is what TypeScript is inferring anyways so I'll remove my explicit annotation.

As an example to understand the difference, 
* lets create a more powerful `Calculator` that extends the `Adder` class.
* We will go ahead and add a another fluent API member called `subtract`.

```js
class Calculator extends Adder {
  subtract(value: number) {
    this.accumulator -= value;
    return this;
  }
}
```

Now if you go ahead and create an instance of the calculator you will notice that the `add` member returns an instance of the `Calculator` class.

```js
const result = new Calculator()
  .add
```

This allows you to chain calculator specific methods in addition to the members of the `Adder` class e.g. we can subtract and then add again and subtract and then get the result.

```js
const result = new Calculator()
  .add(1)
  .subtract(111)
  .add(10)
  .subtract(100)
  .result

console.log({ result })
```
