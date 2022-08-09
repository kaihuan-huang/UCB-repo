// TODO: Import `maths.js`
const maths = require('./maths');
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2]  //process.argv[2] to get the input from the user
const numOne = parseInt(process.argv[3]); //parseInt()  to a number
const numTwo = parseInt(process.argv[4]); //number() to a number
// const numOne = number(process.argv[3]);

switch (operation) {
    case 'sum':
        return console.log(maths.sum(numOne, numTwo));
    case 'difference':
        return console.log(maths.difference(numOne, numTwo));
    case 'product':
        return console.log(maths.product(numOne, numTwo));
    case 'quotient':
        return console.log(maths.quotient(numOne, numTwo));
    default:
        console.log('Check your math!')

}
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
