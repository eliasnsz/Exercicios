alert('Vamos calcular a diferença de idade entre duas pessoas')

// Coletando os nomes:
let userName1 = prompt('Informe o primeiro nome: ')
let userName2 = prompt('Informe o segundo nome: ')

//Coletando as idades:
let userAge1 = Number(prompt(`Informe a idade de ${userName1}: `))
let userAge2 = Number(prompt(`Informe a idade de ${userName2}: `))

//Fazendo as contas:
let resultado = null
if (userAge1 > userAge2) {
  resultado = userAge1 - userAge2
} else {
  resultado = userAge2 - userAge1
}

//Exibindo os resultados:
alert(`A idade de ${userName1} é ${userAge1} anos`)
alert(`A idade de ${userName2} é ${userAge2} anos`)

alert(`A diferença de idade entre ${userName1} é ${userName2} de ${resultado} anos`)