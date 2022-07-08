// When I open the console, all the logs should read true, but right now they do not!
var a = "50"; //string
var b = 50;
var c = 100;
var d = c % b; //number 0
var e = c / 2;//50

var expression1 = (b === e);//true
var expression2 = (e < d); //false

// Use comparison operators so all expressions below log to the console as true
console.log(a == b); 
console.log(b === e);
console.log(c > b);
console.log(d = 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && !expression2); 
console.log( expression1 || expression2);
  
