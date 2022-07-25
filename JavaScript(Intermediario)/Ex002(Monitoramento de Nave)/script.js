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

var newSpaceship;

function registerNewSpaceship() {
    newSpaceship = new Spaceship(
    prompt("Insira o nome da nave:"),
    prompt("Insira a quantidade de tripulantes")
  )
  do {
    newSpaceship.getShipType = prompt("Escolha o tipo da nave: \n" +
      "1 - Batalha \n" +
      "2 - Transporte")
  } while (newSpaceship.shipType == undefined);
  switch (newSpaceship.shipType) {
    case 'Batalha':
      newSpaceship.weaponsQuantity = prompt("Quantas armas a nave possui?")
      showMenu()
      break;
    case 'Transporte':
      newSpaceship.seatsQuantity = prompt("Quantas assentos a nave possui?")
      showMenu()
      break;
    default:
      break;
  }
  shipList.push(newSpaceship)
  alert(`Nave criada com sucesso! `)
  showMenu()
}

function showMenu() {
    let choosedOption = prompt(`Escolha a acao desejada:
  1 - Acelerar nave
  2 - Trocar nave
  3 - Imprimir e Sair`)

  switch (choosedOption) {
    case '1':
      newSpaceship.speedUp(prompt
        ("Digite o valor da aceleracao desejada:")
      )
      break;
    case '2':
        registerNewSpaceship()
      break;
    case '3':
        alert(`Dados da nave:
        Nome: ${newSpaceship.name}
        Quantidade de Tripulantes: ${newSpaceship.crewQuantity}
        Tipo da nave: ${newSpaceship.shipType}
        Velocidade: ${newSpaceship.velocity}`)
      break;
    default:
      alert("Selecione uma opcao valida!")
      showMenu()
      break;
  }
}

registerNewSpaceship()