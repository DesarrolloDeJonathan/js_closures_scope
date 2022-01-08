// First example
a = 2;
var a;
console.log(a);

// Second example
// Con resultado indefinido al no encontrar esa variable
console.log(a);
var a = 2;

// Third example
// Vemos que las ejecuciones de una funcion suceden despues
// que las variables y funciones se han cargado en memoria
nameOfDog("Argot");
function nameOfDog(name) {
  console.log(name);
}
// nameOfDog("Argot"); Aqui ejecuta name
