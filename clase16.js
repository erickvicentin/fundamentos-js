erick = {
  nombre: "Erick",
  apellido: "Vicentin",
  peso: 71
};

var DIAS_QUE_PASARON = 0;
const META = erick.peso - 3;
const INCREMENTO_PESO = 0.2;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);
bajarDePeso = persona => (persona.peso -= INCREMENTO_PESO);

console.log(`${erick.nombre} al inicio del año pesaba ${erick.peso}kg`);

while (erick.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(erick);
  }
  if (realizaDeporte()) {
    bajarDePeso(erick);
  }
  DIAS_QUE_PASARON += 1;
}

console.log(
  `Pasaron ${DIAS_QUE_PASARON} dias hasta que ${
    erick.nombre
  } peso ${erick.peso.toFixed(1)}kg`
);
