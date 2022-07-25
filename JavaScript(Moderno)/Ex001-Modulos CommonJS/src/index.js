import Planet from "./planet"
import convert from "./calc"
const planetas = [

  ["Mercurio", 0.39],
  ["Venus", 0.72],
  ["Terra", 1],
  ["Marte", 1.52],
  ["Jupiter", 5.2],
  ["Saturno", 9.53],
  ["Urano", 19.1],
  ["Netuno", 30]

]

planetas.forEach((planet) => {

  const newPlanet = new Planet(...planet)
  console.log(`Planeta: ${planet[0]} \nDistancia em Km: ${convert(planet[1])}`);

})
