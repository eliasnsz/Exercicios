//Selecionando as Inputs:
const districtInput = document.querySelector("input#district")
const cityInput = document.querySelector("input#city")
const houseNumberInput = document.querySelector("input#houseNumber")
const houseAreaInput = document.querySelector("input#houseArea")
const allInput = document.querySelectorAll("input")
const housesTable = document.querySelector("table#housesTable")

class House {
  constructor(district, city, houseNumber, houseArea) {
    this.district = district
    this.city = city
    this.houseNumber = houseNumber
    this.houseArea = houseArea
  }
}

const houseList = new Array()

function send() {
  //Checagem dos campos:
  let isEmpty;

  allInput.forEach(input => {
    if (input.value.length == 0) {
      isEmpty = true
    } else {

    }
  });
  if (isEmpty == true) {
    alert("Preencha todos os campos!")
  } else {
    createNewHouse()
    allInput.forEach(input => {
      input.value = ''
    });
  }
}

function createNewHouse() {
  housesTable.style.visibility = 'visible'
  //Instanciando a classe   
  const newHouse = new House(
    districtInput.value,
    cityInput.value,
    houseNumberInput.value,
    houseAreaInput.value + " m<sup>2</sup>"
  )
  houseList.push(newHouse)
  addAtList(newHouse)
}

function addAtList(newHouse) {
  //Criando linha com os dados
  const newRow = document.createElement("tr")
  housesTable.appendChild(newRow)
  for (const key in newHouse) {
    const newTd = document.createElement("td")
    newRow.appendChild(newTd)
    newTd.innerHTML = newHouse[key]
  }
  //Criando o botao de excluir
  const newTd = document.createElement("td")
  const newRowButton = document.createElement("button")

  newTd.setAttribute("class", "listRemoveButton")
  newRowButton.setAttribute("onclick", "removeRow(this.parentNode.parentNode)")
  newRowButton.innerHTML = "Excluir"

  newRow.appendChild(newTd)
  newTd.appendChild(newRowButton)

}


function removeRow(element) {
  //Remover da tabela o TD pai do botao que chamou o evento
  housesTable.removeChild(element)
  houseList.pop()
  if (houseList.length == 0) {
    housesTable.style.visibility = 'hidden'
  }
}