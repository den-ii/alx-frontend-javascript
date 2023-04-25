export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) throw new Error('set must be a Set');
  if (!(typeof startString === 'string')) throw new Error('startString must be a string');
  const completed = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      completed.push(item.substr(startString.length));
    }
  }
  if (startString.length) {
    return completed.join('-');
  }
  return '';
}
// returns a string of all the set values that start with a specific string (startString).
