//Coletando os dados:
let userName = prompt('Qual é seu nome piloto?')
let velocidadeInicial = 0
let velocidadeDesejada = prompt('Insira a velocidade desejada para a viagem:')

//Confirmando a escolha: 
let confirmacao = confirm(`Você confirma que a velocidade escolhida foi de ${velocidadeDesejada} km/s?`)
if (confirmacao == true) {
  if (velocidadeDesejada <= 0) {
    alert('A nave está parada. Considere partir e aumentar a velocidade.')
  } else if (velocidadeDesejada < 40){
    alert('Você está devagar. Podemos acelerar mais.')
  } else if (velocidadeDesejada >= 40 && velocidadeDesejada < 80) {
    alert('Parece uma boa velocidade para ser mantida.')
  } else if (velocidadeDesejada >= 80 && velocidadeDesejada < 100) {
    alert('Velocidade elevada! Considere diminuir.')
  } else if (velocidadeDesejada >= 100) {
    alert('Velocidade perigosa! Controle automático forçado.')
    velocidadeDesejada = 70
  }

  alert(`${userName}, a velocidade da nave é de ${velocidadeDesejada} km/s`)

} else {
  alert('Partida cancelada. Desligado motores...')
}