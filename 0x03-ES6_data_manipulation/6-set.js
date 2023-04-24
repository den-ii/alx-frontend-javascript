export default function setFromArray(arr) {
  if (!Array.isArray(arr)) throw new Error('must be an array');
  return new Set(arr);
}
