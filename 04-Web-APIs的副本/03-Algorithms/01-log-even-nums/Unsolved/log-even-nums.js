// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number
//输出num中的所有偶数
var logEvenNums = function(num) {
    for(var i=0; i<= num; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
};

//方法二
// incrementing i by 2 
var logEvenNums = function (num) {
    for (var i = 0; i <= num; i += 2){
        console.log(i);
    }
};
