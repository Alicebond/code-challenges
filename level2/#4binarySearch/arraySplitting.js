const binarySearchWithArraySplitting = (array, target) => {
  if (array.length === 0) return -1;
  const middle = Math.floor(array.length / 2);
  if (array[middle] === element) return middle;
  const [left, right] =
    array[middle] > element ? [0, middle - 1] : [middle + 1, right];
  const subIndex = binarySearchWithArraySplitting(
    array.slice(left, right),
    element,
    compare
  );

  return subIndex === -1 ? subIndex : left + subIndex;
};
