// Add preclass drills here
/*
Write a function that takes in a string and outputs the number of vowels (not counting y).

Ex:
Input: "hello"
Output: 2

Input: "you are great!"
Output: 6

Input: "why?"
Output: 0
*/


// var str1= "you are great!"

function vowelsCount(str1){
    var vCount = 0;
    // var vowelList = "aeiou";
    var input = str1.toLowerCase();
    for (let i = 0; i < input.length; i++){
        if (input[i]==="a" || input[i]==="e" || input[i]==="i" || input[i]==="o" || input[i]==="u"){
            vCount++;
        }
    }
    return vCount;
}

console.log('vowelCount("you are great!")', vowelsCount("you are great!"));