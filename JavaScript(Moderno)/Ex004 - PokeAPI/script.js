const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`

const getPokemon = async () => {
  const inputValue = +document.querySelector("input").value
  console.log(inputValue);
  const pokemonRequest = await axios.get(getPokemonUrl(inputValue))

  const pokemonData = {
    name: pokemonRequest.data["name"].toUpperCase(),
    img: pokemonRequest.data["sprites"]
    ["other"]["official-artwork"]["front_default"],
    id: inputValue
  }

  updatePokedex(pokemonData)

}

getPokemon()

const updatePokedex = (pokemonData) => {
  const pokemonName = document.querySelector("h1")
  const pokemonImage = document.querySelector(".pokemonImg")
  const pokemonId = document.querySelector(".pokemonImg")

  pokemonName.innerHTML = pokemonData.name
  pokemonImage.src = pokemonData.img
  pokemonData.id
} 
