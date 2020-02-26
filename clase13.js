var erick = {
  nombre: "Erick",
  edad: 23,
  profesion: "Developer"
};

var juan = {
  nombre: "Juan",
  edad: 17,
  profesion: "Estudiante"
};

function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    return console.log(persona.nombre + " es mayor de edad");
  } else {
    return console.log(persona.nombre + " es menor de edad");
  }
}

const mayoria_de_edad = 18;

function mayorDeEdad(persona) {
  return persona.edad >= 18; //devuelve true o false
}
