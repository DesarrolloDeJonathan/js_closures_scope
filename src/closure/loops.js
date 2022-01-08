const anotherFunction = () => {
  for (var index = 0; index < 10; index++) {
    setTimeout(() => {
      console.log(index);
    }, 3000);
  }
};
anotherFunction();
