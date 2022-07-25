export default class {

  constructor(name, charge, maxCharge) {
    this.name = name
    this.charge = charge
    this.maxCharge = maxCharge
  }

  get currentChargePercent() {
    return ((this.charge * 100) / this.maxCharge)
  }

}
