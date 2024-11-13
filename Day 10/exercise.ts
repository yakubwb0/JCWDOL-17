// tittle to number

function titleToNumber(columnTitle: string): number {
    let result = 0;
    const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']; // Convert string to array
    for (let i = 0; i < columnTitle.length; i++) {
        const index = letters.indexOf(columnTitle[i]) + 1; // Get 1-based index
        result = result * 26 + index; // Apply base 26 conversion
    }
    return result;
}


console.log(titleToNumber("A"));    // Output: 1
console.log(titleToNumber("Z"));    // Output: 26
console.log(titleToNumber("AA"));   // Output: 27
console.log(titleToNumber("AB"));   // Output: 28
console.log(titleToNumber("AAA"));  // Output: 703, 1*26^2 + 1*26^1 + 1*26^0
console.log(titleToNumber("ZA"));   // Output: 677, 26*26^1 + 1*26^0

// single number

function singleNumber(nums: number[]): number {
    let result = 0;
    for (let num of nums) {
        result ^= num;  // XOR
    }
    return result;
}

console.log(singleNumber([2, 2, 1]));        // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2]));  // Output: 4
console.log(singleNumber([1]));              // Output: 1

// Is Anagram

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const charCount: Record<string, number> = {};

    // Count the characters in the first string
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Verify the counts against the second string
    for (const char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("listen", "silent")); // true


// stairway to heaven

function climbStairs(n: number): number {
    if (n <= 2) return n;

    let prev1 = 1, prev2 = 2;
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    return prev2;
}

console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(4)); // Output: 5

// 4 types of triangle

function printTriangles(height: number): void {
    for (let i = height; i >= 1; i--) {
    console.log('*'.repeat(i));
    }
    for (let i = 1; i <= height; i++) {
    console.log('*'.repeat(i));
    }
    for (let i = height; i >= 1; i--) {
    console.log(' '.repeat(height - i) + '*'.repeat(i));
    }
    for (let i = 1; i <= height; i++) {
    console.log(' '.repeat(height - i) + '*'.repeat(i));
    }
}

printTriangles(5);