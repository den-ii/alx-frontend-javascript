export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand === 'string') {
      this._brand = brand;
    }
    if (typeof motor === 'string') {
      this._motor = motor;
    }
    if (typeof color === 'string') {
      this._color = color;
    }
  }

  cloneCar() {
    return new Car(this._motor, this._color);
  }
}
