class App {
  static registrar() {
    event.preventDefault()

    const form = document.querySelector("form")
    const radioInputValue = document.querySelector("input[name='imovelType']:checked").value
    const areaInputValue = document.querySelector("input[type='number']").value
    const isRentedValue = document.querySelector("input[name='alugar']").checked ? "Alugado" : "Disponivel"
    const values = [isRentedValue, areaInputValue, radioInputValue]

    const newRegister = new Imovel(...values)
    this.createList(newRegister)

    form.reset()
  }

  static createList(newRegister) {
  
    const section = document.querySelector("section.lists")
    const newDiv = document.createElement("div")
    newDiv.classList.add("listDiv")
    for (const key in newRegister) {
      if (key == "isRented") {
        const newH4 = document.createElement("h4")
        newH4.innerText = newRegister[key]
        if (newRegister[key] == "Alugado") {
          newDiv.classList.add("alugado")
        } else {
          newDiv.classList.add("livre")
        }
        newDiv.appendChild(newH4)
      } else {
        const newP = document.createElement("p")
        newDiv.appendChild(newP)
        if (key == "area") {
          newP.innerHTML = `Area: ${newRegister[key]}m<sup>2</sup>`
        } else {
          newP.innerHTML = `Tipo: ${newRegister[key]}`
        }
      }
    }
    const newRemoveButton = document.createElement("button")
    newRemoveButton.innerHTML = "Remover"
    newRemoveButton.addEventListener("click", ( {target} ) => {
      section.removeChild(target.parentNode);
    })
    newDiv.appendChild(newRemoveButton)
    section.appendChild(newDiv)

  }

}

class Imovel {
  constructor(isRented, area, type) {
    this.isRented = isRented,
      this.area = area,
      this.type = type
  }
}
