// Write code to return the the number of vowels in `str`

// In this file you will be writing code in the body of the vowelCount function to achieve the following:

// Return the number of vowels present in str.
// You can check to see if your function works properly by opening Unsolved/test.html in your web browser.

// Functions that PASS the tests will be denoted with a green check mark.

// Functions that FAIL the tests will be denoted with a red X and an error message.



var vowelCount = function(str) {

    var count = 0;

    for (let i = 0; i < str.length; i++) {
        var element = str[i].toLowerCase();
        if (element === 'a' || element === 'e' || element ==='i' || element === 'o'|| element ==='u'){
            count++;
        }      
    }
    return count;
};


// var vowelCount = function (str) {
//   var result = 0;

//   for (var i = 0; i < str.length; i++) {
//     var letter = str[i].toLowerCase();

//     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//       result += 1;
//     }
//   }

//   return result;
// };