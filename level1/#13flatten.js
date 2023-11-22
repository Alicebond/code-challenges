/*
Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"],
  "🏆",
  "💐",
  "💵",
  ["💵", "🏆"],
  ["🐟", "💐", "💐"],
  "💵",
  "💵",
  ["🐟"],
  "🐟",
];

function flatten(arr) {
  return arr.flat();

  const flatedArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((i) => flatedArr.push(i));
    } else flatedArr.push(item);
  });
  return flatedArr;
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
