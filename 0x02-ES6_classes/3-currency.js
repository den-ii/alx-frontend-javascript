export default class Currency {
  constructor(code, name) {
    if (typeof (code) === 'string') {
      this._code = code;
    } else throw new TypeError('code must be a string');
    if (typeof (name) === 'string') {
      this._name = name;
    } else throw new TypeError('name must be a string');
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(val) {
    if (typeof (code) === 'string') {
      this._code = val;
    } else throw new TypeError('code must be a string');
  }

  set name(val) {
    if (typeof (val) === 'string') {
      this._name = val;
    } else throw new TypeError('name must be a string');
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
