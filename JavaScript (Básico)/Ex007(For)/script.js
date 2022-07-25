// Utilizando o For para treinar:

let shipName = prompt('Insira o nome da sua nave:')
let oldCaracter = prompt('Qual caractér você deseja substituir?')
let newCaracter = prompt(`Por qual caractér você deseja substituir a letra ${oldCaracter}?`)

let newShipName = ''

for (let i = 0; i < shipName.length; i++) {
  if (shipName[i] == oldCaracter) {
    newShipName += newCaracter
  } else {
    newShipName += shipName[i]
  }
}

alert(`O novo nome da nave é  ${newShipName}`)

//  Jeito correto:

// let shipName = prompt('Insira o nome da sua nave:')
// let oldCaracter = prompt('Qual caractér você deseja substituir?')
// let newCaracter = prompt(`Por qual caractér você deseja substituir a letra ${oldCaracter}?`)

// let newShipName = shipName.replaceAll(oldCaracter, newCaracter)
// alert(`O novo nome da nave é  ${newShipName}`)