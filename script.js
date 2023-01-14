/*
Matchstick Houses
This challenge will help you interpret mathematical relationships
both algebraically and geometrically.

Matchstick Houses, Steps 1, 2 and 3

Create a function that takes a number (step) as an argument 
and returns the number of matchsticks in that step. 
See step 1, 2 and 3 in the image above.

Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436
Notes
Step 0 returns 0 matchsticks.
The input (step) will always be a non-negative integer.
Think of the input (step) as the total number of houses 
that have been connected together.
*/


const matchHouses = (n) => {
 if(n === 0) {
  console.log("Step 0 returns 0 matchsticks.");
 } else if (n < 0 || typeof n !== 'number') {
  console.log("The input (step) will always be a non-negative integer.");
 } else {
  const difference = 5;
  let result = 0;
  result = (n*5)+1;
return result;
 }
}

console.log(matchHouses(87))


