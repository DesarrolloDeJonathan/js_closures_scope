// Ambito lexico dentro de los closures
// Funciones que se ejecutan usando la cadena del alcance donde estaba vigente en su momento
const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

// Creamos un nuevo alcance para contar desde donde necesitemos
const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();

// Ejemplo intercalado
const myCount1 = buildCount(20);
const myOtherCount2 = buildCount(30);

myCount1();
myOtherCount2();
myCount1();
myOtherCount2();
myCount1();
myOtherCount2();
