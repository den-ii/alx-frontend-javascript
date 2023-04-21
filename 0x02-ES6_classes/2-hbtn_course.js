export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    let allStrings = true;
    for (const student of students) {
      if (typeof (student) !== 'string') {
        allStrings = false;
        break;
      }
    }
    if (Array.isArray(students) && allStrings) {
      this._students = students;
    } else {
      throw new Error('students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(val) {
    if (typeof (val) === 'string') {
      this._name = val;
    } else throw new TypeError('Name must be a string');
  }

  set length(val) {
    if (typeof (val) === 'number') {
      this._length = val;
    } else throw new TypeError('Length must be a number');
  }

  set students(val) {
    let allStrings = true;
    for (const student of val) {
      if (typeof (student) !== 'string') {
        allStrings = false;
        break;
      }
    }
    if (Array.isArray(val) && allStrings) {
      this._students = val;
    } else throw new TypeError('Students must be array of string');
  }
}
