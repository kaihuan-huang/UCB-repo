// Write code to return the largest number in the given array

var maxNum = function(arr){

    var max = arr[0];

    for ( var i = 1; i < arr.length; i++){

        var currentNumber = arr[i];

        if ( currentNumber > max){
           max = currentNumber;
        }
    }

    return max;
};

//第一个数已经赋值给max，所以i=1. 从arr第二个数开始loop


