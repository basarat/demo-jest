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

}