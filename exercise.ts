// 1. Write a function to get the lowest, highest and average value in the soal1ay (with and without sort function).

const soal1 = [12, 5, 23, 18, 4, 45, 32];
function withSort(soal1: number[]): { lowest: number; highest: number; average: number } {

    const sortedsoal1 = soal1.slice().sort((a, b) => a - b); // Sort the array
    const lowest = sortedsoal1[0];
    const highest = sortedsoal1[sortedsoal1.length - 1];
    const average = soal1.reduce((sum, value) => sum + value, 0) / soal1.length;

    return { lowest, highest, average };
}

function withoutSort(soal1: number[]): { lowest: number; highest: number; average: number } {

    let lowest = soal1[0];
    let highest = soal1[0];
    let sum = 0;

    for (const num of soal1) {
        if (num < lowest) lowest = num;
        if (num > highest) highest = num;
        sum += num;
    }

    const average = sum / soal1.length;

    return { lowest, highest, average };
}

const statsWithSort = withSort(soal1);
console.log('With Sort:', statsWithSort); 
// { lowest: 4, highest: 45, average: 18.714285714285715 }

const statsWithoutSort = withoutSort(soal1);
console.log('Without Sort:', statsWithoutSort); 
// { lowest: 4, highest: 45, average: 18.714285714285715 }

/* 2. Write a function that takes an array of words and returns a string by concatenating the words in the soal1ay,
separated by commas and - the last word - by an 'and'. */
 
const soal2 = ["apple", "banana", "cherry", "date"];
const result1 = concatenateWords(soal2);
console.log(result1); // Output: "apple,banana,cherry, and date"

function concatenateWords(soal2: string[]): string {
    const lastWord = soal2.pop(); // hapus index paling akhir
    const result1 = soal2.join(',') + ', and ' + lastWord; // menmbah separator

    return result1;
}

// 3. Write a function from a given array of numbers and return the second smallest number

const numbers = [5, 3, 1, 7, 2, 6];
const result2 = secondSmallest(numbers);
console.log(result2); // Output: 2

function secondSmallest(numbers: number[]): number | null {
    const uniqueNumbers = Array.from(new Set(numbers)); // Remove duplicates
    uniqueNumbers.sort((a, b) => a - b); // Sort the unique numbers
    return uniqueNumbers[1]; // Return the second smallest
}

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.

const array1 = [1, 2, 3];
const array2 = [3, 2, 1];
const result = sumArrays(array1, array2);
console.log(result); // Output: [4, 4, 4]

function sumArrays(arr1: number[], arr2: number[]): number[]{
    return arr1.map((num, index) => num + arr2[index]);
}

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

function addUniqueElement<T>(arr: T[], newElement: T): T[] {
    // apakah element ada di array
    if (!arr.includes(newElement)) {
        // jika tidak push ke array
        arr.push(newElement);
    }
    return arr;
}

let arr1 = [1, 2, 3, 4];
let newElement1 = 4;
console.log(addUniqueElement(arr1, newElement1)); // Output: [1, 2, 3, 4]

let arr2 = [1, 2, 3, 4];
let newElement2 = 7;
console.log(addUniqueElement(arr2, newElement2)); // Output: [1, 2, 3, 4, 7]

