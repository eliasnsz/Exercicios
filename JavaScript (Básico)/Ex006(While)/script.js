let shipName = null
let dobrasRealizadas = null
do {
  shipName = prompt('Insira o nome da nave:')
} while (shipName.length == 0)

let dobraEntryConfirmation = prompt
  (`Deseja entrar em dobra espacial?
1 - Sim
2 - Não
`)

switch (dobraEntryConfirmation) {
  case '1':
    dobrasRealizadas++
    let confirmationNextDobra = prompt(`Deseja realizar a próxima dobra espacial?
    1 - Sim
    2 - Não
    `)
    while (confirmationNextDobra == '1') {
      confirmationNextDobra = prompt(`Deseja realizar a próxima dobra espacial?
    1 - Sim
    2 - Não
    `)
    dobrasRealizadas++
    }
    alert(`A nave ${shipName} realizou ${dobrasRealizadas} dobras.`)
    break;
  case '2':
    alert('Cancelando...')
    break;
  default:
    alert('[ERRO] Informe uma resposta válida!')
    break;
}