function flattenAnArray(array) {
  const flattenArray = [];

  for (const element of array) {
    if (Array.isArray(element)) flattenArray.push(...flattenAnArray(element));
    else flattenArray.push(element);
  }

  return flattenArray;
}

const flattenArray = flattenAnArray([1, [2, [3, 4]], [[5]], [6]]);
console.log(flattenArray);
