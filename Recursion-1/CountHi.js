/* String-2 -- countHi
Return the number of times that the string "hi" appears anywhere in the given string.

Examples

countHi('abc hi ho') → 1
countHi('ABChi hi') → 2
countHi('hihi') → 2*/
function countHi(str) {
  return (str.match(/hi/g) || []).length;  //Finds all occurrences of "hi" using a regular expression (/hi/g).,The g flag ensures it finds all matches ani match() returns null (if nothing is there then)or [] .length for count
}
console.log(countHi('hi there hi')); 