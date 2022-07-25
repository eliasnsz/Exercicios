const pokemonNumber = (number) => {
  return `https://pokeapi.co/api/v2/pokemon/${number}`
} 

const getPokemon = async () => {
  
  try {
    
    const pokemon1 = axios.get(pokemonNumber(1))
    const pokemon4 = axios.get(pokemonNumber(4))
    const pokemon7 = axios.get(pokemonNumber(7))

    const pokemons = await Promise.all([pokemon1, pokemon4, pokemon7])

    console.log(pokemons);
  
  } catch (error) {
    console.log(`Algum erro aconteceu: ${error}`)
  }
  
} 

getPokemon()