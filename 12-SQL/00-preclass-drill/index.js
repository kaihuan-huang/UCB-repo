/*

Write a function that takes an array of numbers and returns an array with each number doubled. 

Ex:
Input: [1,2,3]
Output: [2,4,6]

Input: [-1,-2,-3]
Output: [-2, -4, -6]

SOLUTION #1
var double = function(arr){
  var newArr = [];

  for (var i = 0; i < arr.length; i++){
    const newNum = arr[i] * 2;
    newArr.push(newNum);
  }

  return newArr;
}

*/

const numDoubler = arr => arr.map(n => n * 2)

console.log('numDoubler([1,2,3])', numDoubler([1,2,3]))
console.log('numDoubler([-1,-2,-3])', numDoubler([-1,-2,-3]))




