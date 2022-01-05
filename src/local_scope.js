const helloWorld = () => {
  const hello = "Hello world";
  console.log(hello);
};
helloWorld();

// En esta caso se aplica el ambito lexico
var scope = "i am global";
const functionScope = () => {
  // Variable del mismo nombre pero dentro de la funcion
  var scope = "i am just a local";
  const func = () => {
    return scope;
  };
  console.log(func());
};
functionScope();
console.log(scope);
