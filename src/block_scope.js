const fruits = () => {
  if (true) {
    var fruits1 = "apple";
    let fruits2 = "banana";
    const fruits3 = "kiwi";
    // Accedemos dentro del ambito o bloque para que podamos acceder a ellas
    console.log(fruits2);
    console.log(fruits3);
  }
  console.log(fruits1);
  console.log(fruits2);
  console.log(fruits3);
};
fruits();

// Example
// Valor global
let x = 1;
{
  // Valor de bloque
  let x = 2;
  console.log(x);
}
// Veremos que el valor global fue reasignado por el valor de bloque, debemos cuidarnos de eso
console.log(x);

// Example Two
// Veremos que al ejecutar la funcion ejecuta 10 veces el mismo numero
// Esto ocurre por que la variable que itera se esta sobrescribiendo
// se soluciona cambiando la sintaxis del iterador por let
const anotherFunction = () => {
  for (var index = 0; index < 10; index++) {
    setTimeout(() => {
      console.log(index);
    }, 3000);
  }
};
anotherFunction();
