const speedDown = (velocidade, callPrinter) => {
  while (velocidade > 0) {
    callPrinter(velocidade)
    velocidade -= 20
  }
  console.log(`A nave esta parada, abrindo portas!`);
  return velocidade
}

const printer = velocidade => console.log(`Velocidade da nave: ${velocidade}`);

speedDown(150, printer)