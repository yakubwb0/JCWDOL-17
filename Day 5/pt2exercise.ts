// 1. Write a function from a given array of mixed data types and return the sum of all the number

const mixedArray = ["3", 1, "string", null, false, undefined, 2];

function sumNumbers(mixedArray: any[]): number {
  return mixedArray.reduce((sum, item) => {
    if (typeof item === "number") {
      return sum + item;
    }
    return sum;
  }, 0);
}

console.log(sumNumbers(mixedArray)); // Output: 3

/* 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements). */

function insertWithMaxSize(maxSize: number, ...integers: number[]): number[] {
  return integers.slice(0, maxSize);
}

const maxSize = 5;
console.log(insertWithMaxSize(maxSize, 5, 10, 24, 3, 6, 7, 8));
// Output: [5, 10, 24, 3, 6]














