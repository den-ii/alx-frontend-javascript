export default class HolbertonClass {
  constructor(size, location) {
    if (size === 'number') {
      this._size = size;
    } else throw new Error('size must be a number');
    if (location === 'string') {
      this._location = location;
    } else throw new Error('location must be a string');
    this._location = location;
  }

  // Getters for size and location
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Number casting
  valueOf() {
    return this._size;
  }

  // String casting
  toString() {
    return this._location;
  }
}
