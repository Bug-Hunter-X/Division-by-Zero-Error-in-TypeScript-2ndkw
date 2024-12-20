function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    return 0; // Or handle the error in a more sophisticated way
  }
  return a / b;
}

let result = add(5, 3); // result is 8
console.log(result); // Output: 8

result = subtract(10, 4); // result is 6
console.log(result); // Output: 6

result = multiply(7, 2); // result is 14
console.log(result); // Output: 14

result = divide(9, 3); // result is 3
console.log(result); // Output: 3

result = divide(10, 0); // Returns 0 instead of throwing an error
console.log(result); // Output: 0