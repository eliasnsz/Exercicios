//COLETANDO DADOS DO USUARIO:
let nave = {
  name: prompt(`Insira o nome da nave: `),
  velocity: 0
}

let chooseOption = ``

//Declarando as functions que serao utilizadas:

function speedUp5() {
  alert(`Acelerando...`)
  return nave.velocity += 5
}

function speedDown5() {
  if (velocity <= 0) {
    alert(`Voce esta parado, nao e possivel desacelerar`)
    return nave.velocity = 0
  } else {
    alert(`Desacelerando...`)
    return nave.velocity -= 5
  }
}

function printInfo() {
  alert(`Nome da nave: ${nave.name}
Velocidade atual: ${nave.velocity}`)
}

function exit() {
  alert(`Encerrando sistema...`)
}

//Executando as functions de acordo com as escolhas:

do {
  chooseOption = prompt(
    `Escolha uma opcao
  1 - Acelerar a nave em 5 km/h
  2 - Desacelerar a nave em 5 km/h
  3 - Imprimir dados de bordo
  4 - Sair do programa
  `)
  switch (chooseOption) {
    case '1':
      velocity = speedUp5()
    break;
    case '2':
      velocity = speedDown5()
    break
    case '3':
      printInfo()
    break;
    case '4':
      exit()
    break;
    default:
      alert(`Escolha uma opcao valida!`)
      break;
  }
} while (chooseOption != 4);





