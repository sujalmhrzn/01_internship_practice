function monkeyTrouble(aSmile, bSmile) {
  return aSmile === bSmile; //(if euqal to both condition ture when value is same  or else)
}
console.log(monkeyTrouble(true, true));  // true
console.log(monkeyTrouble(false, false)); // true
console.log(monkeyTrouble(true, false));  // false
console.log(monkeyTrouble(false, true));  // false