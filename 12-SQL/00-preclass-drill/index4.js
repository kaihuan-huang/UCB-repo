/*Write a function that takes in a number and reverses the order of the digits.

Ex:
Input: 1234
Output:4321

Input: 1201
Output:1021

Input: 4
Output: 4
*/

const reversesDigits = num => {
    return num.toString().split('').reverse().join("")
}

console.log('reversesDigits(1234)',reversesDigits(1234));
console.log('reversesDigits(1201)',reversesDigits(1201));