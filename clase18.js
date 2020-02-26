var signo = prompt("Cual es tu signo?");

switch (signo.toLowerCase) {
  case "sagitario" || "capricornio" || "picis":
    console.log("Obtendras un nuevo empleo");
    break;
  case "aries" || "leo" || "cancer":
    console.log("Ganaras 50k dolares");
    break;
  case "libra" || "escorpio" || "virgo":
    console.log("Tendras buenas noticias");
    break;
  case "acuario" || "geminis" || "tauro":
    console.log("Preparate para consecuencias previstas");
  case "" || null:
    console.log("No has ingresado nada");
    break;
  default:
    console.log("No ingresaste un signo correctamente");
    break;
}
