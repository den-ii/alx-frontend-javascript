export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else throw new TypeError('name must be a string');
    if (typeof code === 'string') {
      this._code = code;
    } else throw new TypeError('code must be a string');
  }

  toString() {
    return `[object ${this._code}]`;
  }

  inspect() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
