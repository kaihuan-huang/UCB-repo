// Write a function that takes in a string and if the string is a string representation of a number, return the negative version of that number otherwise throw an Error.

// Ex:
// Input: '1'
// Output: -1

// Input: '4'
// Output: -4

// Input: 'cow'
// Error

const negativeNum = (str) => {

    if (str == Number(str)) {
        return -str;
    }
    throw 'This is not a number';

}
console.log('negativeNum', negativeNum("-9"));
console.log('negativeNum', negativeNum("cow"));
console.log('negativeNum', negativeNum("8"));