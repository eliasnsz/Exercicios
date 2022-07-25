let shipName = prompt('Insira o nome da nave:')
let invertedName = ''

for (let i = shipName.length - 1 ; i >= 0 ; i--) {
  if (shipName[i] == `e` || shipName[i] == `E`) {
    break
  } else {
    invertedName += shipName[i]
  }
}

alert(`Nome da nave: ${shipName}
Nome invertido: ${invertedName}`)