function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
  return this;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

var erick = new Persona("Erick", "Vicentin", 1.69);
var melisa = new Persona("Melisa", "Medina", 1.53);
var santiago = new Persona("Santiago", "Duarte", 1.86);
var franco = new Persona("Franco", "Lago", 1.84);
