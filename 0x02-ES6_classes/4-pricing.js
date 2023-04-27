import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else {
      throw new Error('amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else throw new Error('currency must be an instance of Currency');
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else throw new Error('amount must be a number');
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = 'currency';
    } else throw new Error('currency must be an instance of Currency');
  }

  // convertPrice(amount, conversionRate) {
  //   return amount * conversionRate;
  // }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }
}
