export default function appendToEachArrayValue(array, appendString) {
  const finalArray = [];
  for (let idx of array) {
    finalArray.push(appendString + idx);
  }

  return finalArray;
}
