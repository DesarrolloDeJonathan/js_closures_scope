var fruits = () => {
  var fruit = "apple";
  console.log(fruit);
};
fruits();
// No podemos acceder a la variable dentro de la funcion
// pertenece al scope de la funcion
console.log(fruit);

// Ejemplo
const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  let y = 2;
  // Este no da error pues var permite sobrescribir su valor
  console.log(x);
  // Con let nos dara error
  console.log(y);
};
anotherFunction();
