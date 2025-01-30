//When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.
function cigarParty(cigars, isWeekend) {
  return isWeekend ? cigars >= 40 : cigars >= 40 && cigars <= 60; //hamro condition chai 40-60  so also there should be weekend
}
console.log(cigarParty(30, false) ); //ans false 
console.log(cigarParty(50, false)); // ans true
console.log(cigarParty(70, true)) ; //ans true