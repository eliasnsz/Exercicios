import Spaceship from "./class_spaceship.js"
import SpaceshipEngine from "./class_spaceshipEngine"

const spaceships = [
  ["Sophia", 5, 10],
  ["Amsterda", 10, 14],
  ["Estrela-Ana", 4, 20]
]

spaceships.forEach(spaceship => {
  const newSpaceship = new Spaceship(...spaceship)
  const newSpaceshipEngine = new SpaceshipEngine()
  newSpaceshipEngine.engineStart(newSpaceship)
  console.log(newSpaceship); 
});