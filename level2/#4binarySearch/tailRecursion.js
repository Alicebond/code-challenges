const binarySearchWithTaiRecursion = (
  array,
  target,
  left = 0,
  right = array.length - 1
) => {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);
  if (array[middle] === target) return middle;

  const bounds =
    array[middle] > target
      ? [left, (right = middle - 1)]
      : [(left = middle + 1), right];
  return binarySearchWithTaiRecursion(array, target, ...bounds);
};
