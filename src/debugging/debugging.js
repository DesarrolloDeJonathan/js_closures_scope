var a = "Hello";

function hello() {
  let b = "Hello Let con BBB";
  const c = "Hello Const";
  if (true) {
    let d = "Hello Let con DDD";
    debugger; //Aqui se pausa la ejecucion del codigo
  }
}
hello();

// Other example
const moneyBox = () => {
  debugger;
  var saveCoins = 0;
  const countCoins = (coins) => {
    debugger;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
