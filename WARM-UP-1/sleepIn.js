//The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
function sleepIn(weekday, vacation) {
  return !weekday || vacation; //(Logical Or ,if any one condition is ture )
}

// Call the function with arguments
console.log(sleepIn(false, true)); 
console.log(sleepIn(true, false)); 
console.log(sleepIn(false, false)); 
console.log(sleepIn(true, true));//  