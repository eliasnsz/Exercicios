export default class {

  engineStart(newSpaceship) {

    return new Promise((resolve, reject) => {

      if (newSpaceship.currentChargePercent >= 30) {
        resolve((newSpaceship.currentChargePercent).toFixed(2) + "%");
      } else {
        reject((newSpaceship.currentChargePercent).toFixed(2) + "%")
      }

    }).then((percent) => {
      console.log(`[${newSpaceship.name}] Partida Autorizada: carga atual ${percent}`);
    }).catch(percent => {
      console.log(`[${newSpaceship.name}] Partida Negada: carga atual ${percent}`);
    })

  }

}
