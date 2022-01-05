var hi_var = `Hello Var`;
var hi_var = `Hello Var Sobrescrita`; //Bad practice
let hi_let = `Hello Let`;
const hi_const = `Hello Const`;

console.log(hi_var);

const anotherFunction = () => {
  // Accediendo a variables globales
  console.log(hi_var);
  console.log(hi_let);
  console.log(hi_const);
};

anotherFunction();

const anotherFuntion1 = () => {
  //Varibles sin palabra reservada pasa a ser global
  // globalVar = "Soy global";
  var localVar = (globalVar = "I am Global");
};
//Ejecutamos la funcion antes
anotherFuntion1();
console.log(globalVar);
