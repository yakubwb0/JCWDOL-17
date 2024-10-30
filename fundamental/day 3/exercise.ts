/** @format */

// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9 x 1
// 9 x 2
// …
// 9 x 10

let counter: number = 10;
for (let i = 1; i <= counter; i++) {
  let number: number = 9;
  console.log(number, "x", i);
}

// Write a code to check whether a string is a palindrome or not.
// Example : ‘madam’ → palindrome
// string merupakan kumpulan dari karakter
let str: string = "cat";
let reverse: string = "";
//cat = 3-1 = 2

// c = 0
// a = 1
// t = 2

//i = 0
//reverse = tac

for (let i = str.length - 1; i >= 0; i--) {
  reverse += str.charAt(i);
}
console.log(str, "->", str == reverse ? "palindrome" : "not palindrome");

// Write a code to convert centimeter to kilometer.
// Example : 100000 cm → “1 km”
let distance: number = 100000; //in cm
console.log(distance, "cm ->", distance / 100000, "km");

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
let money: number = 1000;
console.log(
  new Intl.NumberFormat("id-ID", { currency: "IDR", style: "currency" }).format(
    money
  )
);

console.log(`Rp ${money.toLocaleString("id-ID")},00`);

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”
str = "Hello world";
console.log(str.replace("ell", ""));

// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”
str = "hello world";
let capitalize: string = "";
for (let i = 0; i < str.length; i++) {
  if (i == 0 || str.charAt(i - 1) == " ")
    capitalize += str.charAt(i).toUpperCase(); //H  W
  else capitalize += str.charAt(i).toLowerCase(); //ello orld
}

//capitalize = H
console.log(capitalize);
// i=5 adalah " "
//i = 6. maka "w"
// 6-1 =5. karakter 5 itu adalah " " maka true
