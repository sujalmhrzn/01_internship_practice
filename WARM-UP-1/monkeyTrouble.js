//We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.
function monkeyTrouble(aSmile, bSmile) {
  return aSmile === bSmile; //(if euqal to both condition ture when value is same  or else)
}
console.log(monkeyTrouble(true, true));  // true
console.log(monkeyTrouble(false, false)); // true
console.log(monkeyTrouble(true, false));  // false
console.log(monkeyTrouble(false, true));  // false