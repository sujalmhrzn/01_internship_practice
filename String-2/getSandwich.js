function getSandwich(str) {
  let first = str.indexOf("bread");
  let last = str.lastIndexOf("bread");

  if (first !== -1 && last !== -1 && first < last) {
    return str.slice(first + 5, last);
  }
  return "";
}
//console.log(getSandwich("breadhero"))
console.log(getSandwich('breadandbread'));
