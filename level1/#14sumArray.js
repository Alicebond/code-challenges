// Return the sum of an array of numbers
// Example input: [1,2,3]
// Example output: 6

const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];

function sumArray(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumArray(studentCount));
