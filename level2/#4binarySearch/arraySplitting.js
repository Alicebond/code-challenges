const binarySearchWithArraySplitting = (array, target) => {
  if (array.length === 0) return -1;
  const middle = Math.floor(array.length / 2);
  if (array[middle] === element) return middle;
  const [left, right] =
    array[middle] > element ? [middle + 1, right] : [0, middle - 1];
  const subIndex = binarySearchWithArraySplitting(
    array.slice(left, right),
    element,
    compare
  );

  return subIndex === -1 ? subIndex : left + subIndex;
};
