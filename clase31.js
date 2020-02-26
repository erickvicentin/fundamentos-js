const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

const onPeopleResponse = function(data) {
  console.log(`Hola, yo soy ${data.name} y peso ${data.mass}kg.`);
};

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, onPeopleResponse);
}

var idActor = prompt("Ingrese un id");

obtenerPersonaje(idActor);
obtenerPersonaje(2);
obtenerPersonaje(3);
