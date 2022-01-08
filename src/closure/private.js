const person = () => {
  var saveName = "name";
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

newPerson = person();
// 1ro el valor que tiene almacenado esa variable
console.log(newPerson.getName());
// Solo podremos cambiarlo por medio de este metodo para hacer esa asignacion
// De esta forma creamos un valor privado y no tenemos acceso a ella
newPerson.setName("Jonathan");
// Luego el valor que asignamos
console.log(newPerson.getName());
