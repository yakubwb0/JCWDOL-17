// 1. Based on the array below write a function that will return primitive data types only.

let arei = [1, [], undefined, {}, "string", {}, []];

function filterPrimitives(arei: any[]): any[] {
    return arei.filter(item => item !== Object(item));
}
  
console.log(filterPrimitives(arei));
// Output: [1, undefined, "string"]

// 2. Write a function from the below array of number that will return sum of duplicate values.

let baris = [10, 20, 40, 10, 50, 30, 10, 60, 10];

function sumOfDuplicates(baris: number[]): number {
    const duplicates = baris.filter((item, index) => baris.indexOf(item) !== index);
    const uniqueDuplicates = [...new Set(duplicates)];
    return uniqueDuplicates.reduce((sum, num) => sum + num, 0);
  }
  

  console.log(sumOfDuplicates(baris));
  // Output: 40

/* 3. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor. */

function playRockPaperScissors(playerChoice: 'rock' | 'paper' | 'scissors'): string {
    const choices: Array<'rock' | 'paper' | 'scissors'> = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    console.log(`Computer chose: ${computerChoice}`);
  
    // W or L
    if (playerChoice === computerChoice) {
      return 'Draw'; // jika sama draw
    }
  
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'Win'; // Player wins
    } else {
      return 'Lose'; // Player loses
    }
  }
  
    console.log(playRockPaperScissors('rock')); 
  // Output: 'Win', 'Lose', or 'Draw' based on random choice
  



