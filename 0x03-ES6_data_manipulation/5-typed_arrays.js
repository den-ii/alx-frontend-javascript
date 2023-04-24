export default function createInt8TypedArray(length, position, value) {
  // eslint-disable-next-line no-constant-condition
  if (!typeof length === 'number'
  || !typeof position === 'number' || !typeof value === 'number') {
    throw new Error('length, position, value must be a number');
  }
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;
  return new DataView(buffer);
}
