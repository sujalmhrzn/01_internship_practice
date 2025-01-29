//We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.
function xyBalance(str) {
  return str.lastIndexOf('y') >= str.lastIndexOf('x');
}
console.log(xyBalance('xheroy'));  // (true) x comes  before y then its true  5>1 