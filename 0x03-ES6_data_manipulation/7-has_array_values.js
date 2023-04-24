export default function hasValuesFromArray(set, arr) {
  if (!(set instanceof Set) || !Array.isArray(arr)) {
    throw new Error('must have a set and an array');
  }
  const truthy = [];
  for (const elem of arr) {
    if (set.has(elem)) {
      truthy.push(true);
    } else truthy.push(false);
  }
  if (truthy.includes(false)) {
    return false;
  }
  return true;
}
