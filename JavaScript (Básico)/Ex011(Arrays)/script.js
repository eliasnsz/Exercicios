const hitchedSpaceships = [
  ['Fenix', 11, true],
  ['Golias', 10, true],
  ['Helmet', 5, false],
  ['Elemental', 3, true],
  ['Darwin', 15, false]
]

const mostNineTripulantArr = hitchedSpaceships.filter(spaceships=>spaceships[1]>9).map((spaceshipName)=>spaceshipName[0])


const pendentPlataform = 1 + hitchedSpaceships.findIndex(spaceships => {
  return (spaceships[2] == false)
})

const spaceshipsNames = hitchedSpaceships.map(spaceships => spaceships[0].toUpperCase())



console.log(`Naves com mais de nove tripulantes: ${mostNineTripulantArr.join(', ')}
Plataforma pendente mais proxima: PLATAFORMA ${pendentPlataform}
Nomes das Naves: ${spaceshipsNames.join(', ')} 
`);
