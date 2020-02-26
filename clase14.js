// En esta clase aprenderemos a utilizar Arrow Functions que 
// permiten una nomenclatura más corta para escribir expresiones 
// de funciones. Este tipo de funciones deben definirse antes de 
// ser utilizadas.

// Al escribir las Arrow Functions no es necesario escribir la
// palabra function, la palabra return, ni las llaves.

var carlos = {
    edad:20
  }

  var juan = {
    edad:15
  }

  const MAYORIA_DE_EDAD = 18

  const esMayorDeEdad = ({edad}) => edad > MAYORIA_DE_EDAD

  const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad})

  functionpermitirAcceso(persona) {
    if (esMenorDeEdad(persona)) {
      console.log("acceso denegado");
    }

    else {
      console.log('acceso concedido');
    }
  }

  permitirAcceso(carlos)
  permitirAcceso(juan)