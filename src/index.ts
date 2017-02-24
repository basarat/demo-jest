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

class Calculator extends Adder {
  subtract(value: number) {
    this.accumulator -= value;
    return this;
  }
}

const result = new Calculator()
  .add(1)
  .subtract(111)
  .add(10)
  .subtract(100)
  .result;

console.log({ result });