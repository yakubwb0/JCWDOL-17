// 1. Write a function that will combine 2 given array into one array

const kombi1 = [1, 2, 3];
const kombi2 = [4, 5, 6];
function combineArrays<T>(kombi1: T[], kombi2: T[]): T[] {
    return [...kombi1, ...kombi2];
  }
  
console.log(combineArrays(kombi1, kombi2)); 
// Output: [1, 2, 3, 4, 5, 6]

// 2. Write a function to find duplicate values in an array.

const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];

function findDuplicates(arr: number[]): number[] {
    return arr.filter((item, index) => arr.indexOf(item) !== index)
              .filter((item, index, self) => self.indexOf(item) === index);
}
  
console.log(findDuplicates(arr));
// Output: [2, 3, 5]

// 3. Write a function to find the difference in 2 given array

const arai1 = [1, 2, 3, 4, 5];
const arai2 = [3, 4, 5, 6, 7];

function arrayDifference(arai1: number[], arai2: number[]): number[] {
    return [
      ...arai1.filter(item => !arai2.includes(item)),
      ...arai2.filter(item => !arai1.includes(item))
    ];
  }
  
console.log(arrayDifference(arai1, arai2));
// Output: [1, 2, 6, 7]















