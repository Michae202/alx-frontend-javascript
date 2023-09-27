/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') if (typeof name === 'string') this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
