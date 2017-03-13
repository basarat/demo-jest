/**
 * Write a program that prints the integers from 1 to 100 (inclusive).
 * But:
 *  - for multiples of three, print Fizz (instead of the number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz (instead of the number)
 */

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
