/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon",
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli",
  "🧀 cheese",
  "🥦 broccoli",
  "🌶️ hot sauce",
];

function removeDupesFromArray(arr) {
  // Solution 1
  let noDupesArray = [];
  for (let i of arr) {
    if (!noDupesArray.includes(i)) noDupesArray.push(i);
  }
  return noDupesArray;
  // Solution 2
  return Array.from(new Set(arr));
  return [...new Set(arr)];
  // Solution 3
  let noDupeObj = {};
  arr.forEach((i) => {
    if (!noDupeObj[i]) noDupeObj[i] = i;
  });
  return Object.values(noDupeObj);
  // Solution 3 improved
  const trackDupes = {};

  return arr.filter((item) => {
    if (!trackDupes[item]) {
      trackDupes[item] = true;
      return true;
    }
    return false;
  });
}

console.log(removeDupesFromArray(eggScrambleRecipe));
