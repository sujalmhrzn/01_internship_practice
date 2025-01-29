//The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
function sleepIn(weekday, vacation) {
  return !weekday || vacation; //(Logical Or ,if any one condition is ture )
}

// Call the function with arguments
console.log(sleepIn(false, true)); // Output: true (Can sleep in)
console.log(sleepIn(true, false)); // Output: false (Cannot sleep in)
console.log(sleepIn(false, false)); // Output: true (Can sleep in)
console.log(sleepIn(true, true));// Output: true(sure can sleep)  