// Write code to add all the numbers in `arr` and return the total
//先define 结果
//for loop 把 arr 的所有数相加放到结果
var sumArray = function(arr) {
    var result = 0;

    for (i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
};
