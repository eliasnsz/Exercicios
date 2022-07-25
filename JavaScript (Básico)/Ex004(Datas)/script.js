let departureDateEntry = prompt(`Digite a data de partida (Formato: DD/MM/YYYY)`)

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt(`
Escolha como gostaria de exibir o tempo de partida
1 - Segundos
2 - Minutos
3 - Horas
4 - Dias 
`)

switch (chosenOption) {
  case `1`:
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert(`Tempo de voo: ${secondsOfDeparture} segundos.`)
    break;
  case `2`:
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60 )
    alert(`Tempo de voo: ${minutesOfDeparture} minutos.`)
    break;
  case `3`:
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert(`Tempo de voo: ${hoursOfDeparture} horas.`)
    break;  
  case `4`:
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert(`Tempo de voo: ${daysOfDeparture} dias.`)
    break;
  default:
    alert(`ERRO!`)
    break;
}