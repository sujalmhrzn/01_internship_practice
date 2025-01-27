// Define the function
function sleepIn(weekday, vacation) {
  return !weekday || vacation; //(Logical Or ,if any one condition is ture )
}

// Call the function with arguments
console.log(sleepIn(false, true)); // Output: true (Can sleep in)
console.log(sleepIn(true, false)); // Output: false (Cannot sleep in)
console.log(sleepIn(false, false)); // Output: true (Can sleep in)
console.log(sleepIn(true, true));// Output: true(sure can sleep)  