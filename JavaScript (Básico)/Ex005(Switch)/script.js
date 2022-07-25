let distanceEntry = window.prompt('Digite a distância desejada:')
if (distanceEntry == null || distanceEntry <= 0) {
  alert(`[ERRO]: Insira um valor válido!`)
} else {
  let conversao = prompt(`
Selecione para qual unidade de medida deseja converter:
1 - Parsecs (Pc)
2 - Unidades Astronômicas (AU)
3 - Quilômetros
`)

  let unidadeDeMedida = null
  let resultado = null


  switch (conversao) {
    case '1':
      unidadeDeMedida = 'Parsecs'
      resultado = Number(distanceEntry) * 0.306601
      alert
        (`Distância em anos-luz: ${distanceEntry}
Distância em ${unidadeDeMedida}: ${resultado}`)
      break;
    case '2':
      unidadeDeMedida = 'Unidades Astronômicas'
      resultado = Number(distanceEntry) * 63241.1
      alert
        (`Distância em anos-luz: ${distanceEntry}
Distância em ${unidadeDeMedida}: ${resultado}`)
      break;
    case '3':
      unidadeDeMedida = 'Quilômetros'
      resultado = Number(distanceEntry) * 9.5 * Math.pow(10, 12)
      alert
        (`Distância em anos-luz: ${distanceEntry}
Distância em ${unidadeDeMedida}: ${resultado}`)
      break;

    default:
      alert
        (`Distância em anos-luz: ${distanceEntry}
Unidade não identificada: Conversão fora do escopo`)
      break;
  }
}
