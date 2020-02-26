var erick = {
  nombre: "Erick",
  apellido: "Vicentin",
  altura: 1.69
};
var melisa = {
  nombre: "Melisa",
  apellido: "Medina",
  altura: 1.58
};
var pablo = {
  nombre: "Pablo",
  apellido: "Medina",
  altura: 1.7
};
var elias = {
  nombre: "Elias",
  apellido: "Gomez",
  altura: 1.67
};
var vanessa = {
  nombre: "Vanessa",
  apellido: "Medina",
  altura: 1.6
};

var personas = [erick, melisa, pablo, elias, vanessa];

const pasarAlturaCm = persona => {
  // persona.altura *= 100;
  return {
    ...persona,
    altura: persona.altura * 100
  };
};

var personasCm = personas.map(pasarAlturaCm);

console.log(personasCm);
