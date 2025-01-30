/*Recursion-1 -- factorial
Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).

Examples

factorial(1) → 1
factorial(2) → 2
factorial(3) → 6 */

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);  // a recursive function using the ternary operator.
}
console.log(factorial(3));