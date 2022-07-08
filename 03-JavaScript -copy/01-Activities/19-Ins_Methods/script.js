var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmaticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var myString = "Hello String";
//Method
//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort(); 
//0: "Equal"
// 1: "Greater Than"
// 2: "Less Than"
// 3: "Not Equal"
// 4: "Strict Equal"
// 5: "Strict Not Equal"
// length: 6

//Logs sorted array
console.log(comparisonOperators);
// 0: "+"
// 1: "-"
// 2: "%"
// length: 3

// Adds elements to end of an array. Takes in at least one parameter
arithmaticOperators.push("%");
// 0: "+"
// 1: "-"
// 2: "%"
// 3: "%"
// length: 4

//Logs array with element "%" added to end
console.log(arithmaticOperators);
// 0: "and"
// 1: "or"
// 3:"not"
// length: 3

//Returns selected elements as a new array.
var logicalOperatorsSliced = logicalOperators.slice(0,2);
// 0: "and"
// 1: "or"
// length: 2

//Logs new array
console.log(logicalOperatorsSliced);

// The orginal array is unchanged
console.log(logicalOperators);
// 0: "and"
// 1: "or"
// 3:"not"
// length: 3

//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("String", "World");
console.log(myNewString);
//Hello World

//Replaces all
var myNewString = myString.replace("Hello", "World");
console.log(myNewString);???

//The orginal string is unchanged
console.log(myString);
