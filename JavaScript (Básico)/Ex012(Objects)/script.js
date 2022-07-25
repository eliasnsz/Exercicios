const spaceship = {
  name: prompt('Insira do nome da nave:'),
  type: prompt('Insira o tipo da nave:'),
  maxVelocity: prompt('Insira a velocidade maxima da nave:'),
  velocity: 0,
  speedUp: acceleration => spaceship.velocity += acceleration,
  stop: () => {
    alert(`Parando nave...
        Nome da nave: ${spaceship.name}
        Tipo da nave: ${spaceship.type}
        Ultima velocidade registrada: ${spaceship.velocity} km/s`)
  }
}

do {
  var userChoose = prompt('Digite 1 para acelerar \nDigite 2 para parar')
  switch (userChoose) {
    case '1':
      spaceship.speedUp(Number(prompt('Em quanto deseja acelerar?')))
      if (spaceship.velocity > spaceship.maxVelocity) {
        alert(`PERIGO: A velocidade maxima de seguranca foi ultrapassada!
          Velocidade maxima: ${spaceship.maxVelocity}
          Velocidade Atual: ${spaceship.velocity}`)
      } else {
        alert(`Nova velocidade: ${spaceship.velocity}`)
      }
      break;
    case '2':
      if (spaceship.velocity > 0) {
        spaceship.stop()
      }
      break;
    default:
      alert('Insira um numero valido')
      break;
  }



} while (userChoose != 2) 