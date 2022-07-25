// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 

let valueEntry = null

do {
  valueEntry = prompt('Digite um valor de 0 a 10')
} while (!(valueEntry >= 0 && valueEntry <= 10) || valueEntry.length == 0);