const binarySearchWithRecursion = (
  array,
  target,
  left = 0,
  right = array.length - 1
) => {
  const middle = Math.floor((left + right) / 2);
  return left > right
    ? -1
    : array[middle] > target
    ? binarySearchWithRecursion(array, target, left, (right = middle - 1))
    : array[middle] < target
    ? binarySearchWithRecursion(array, target, (left = middle + 1), right)
    : middle;
};
