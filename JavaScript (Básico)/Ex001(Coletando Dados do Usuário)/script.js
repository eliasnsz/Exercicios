window.alert('Bem-vindo. A seguir pediremos que nos informe alguns dados!')
let userName = prompt('Qual é seu nome?')
let userAge = prompt('Qual a sua idade')
let confirmAge = confirm(`Você realmente tem ${userAge} anos?`)
if (confirmAge == true) {
  alert(`Seja bem-vindo ${userName}, você tem ${userAge} anos e confirma sua idade!`)
} else {
  alert(`Seja bem-vindo ${userName}, você tem ${userAge} anos e não confirma sua idade!`)
}