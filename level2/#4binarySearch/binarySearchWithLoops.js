let binarySearchWithLoops = (array, target) => {
  array.sort((a, b) => a - b);
  let left = 0,
    right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] > target) right = middle - 1;
    else if (array[middle] < target) left = middle + 1;
    else return middle;
  }
  return -1;
};
