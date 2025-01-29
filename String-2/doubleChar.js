function doubleChar(str) {
  let result = '';
  for (let char of str) {
    result += char + char; //(adding single character  of given string until the condition isnt meet )
  }
  return result;
}
// console.log(doubleChar('su'));
console.log(doubleChar('jal'));