class Spaceship {
  constructor(name, crewQuantity) {
    this.name = name
    this.crewQuantity = crewQuantity
    this.shipType = undefined
    this.velocity = 0
  }

  speedUp(acceleration) {
    alert("Acelerando nave...")
    this.velocity += (acceleration * (1 - 0.17))
    alert(`Nova velocidade: ${this.velocity}`)
    showMenu()
  }

  set getShipType(choosedType) {
    switch (choosedType) {
      case '1':
        this.shipType = 'Batalha'
        break;
      case '2':
        this.shipType = 'Transporte'
        break;
      default:
        alert('Insira um valor valido!')
        break;
    }
  }
}