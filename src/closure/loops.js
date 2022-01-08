// Si en vez de let ponemos var se genera un loop que hace que el resultado sea siempre 10

const anotherFunction = () => {
  for (var index = 0; index < 10; index++) {
    setTimeout(() => {
      console.log(index);
    }, 3000);
  }
};
anotherFunction();
