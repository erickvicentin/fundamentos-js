erick = {
  nombre: "Erick",
  apellido: "Vicentin",
  peso: 71
};

const INCREMENTO_PESO = 0.2;

aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);

bajarDePeso = persona => (persona.peso -= INCREMENTO_PESO);

console.log(`${erick.nombre} al inicio del año pesaba ${erick.peso}kg`);

for (let index = 1; index < 365; index++) {
  var random = Math.random();

  if (random < 0.25) {
    aumentarDePeso(erick);
  } else if (random < 0.5) {
    bajarDePeso(erick);
  }
}

console.log(`${erick.nombre} al final del año pesa ${erick.peso.toFixed(2)}kg`);
