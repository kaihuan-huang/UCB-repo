// A variable declared in global scope is available to all functions
var hello = "Hello"; 
var goodbye='good-bye';

function sayHello() {
  console.log(hello);
  return;
}

var sayHelloAgain = function () {
  console.log(hello);
  return;
};

sayHello();
sayHelloAgain();

//A variable declared in local scope is only available to that function
function sayGoodbye() { 
  var goodbye = "Goodbye";
  console.log(goodbye);
  return;
}

//This will throw an error,because it's a inside local scope
var sayGoodbyeAgain = function () { 
  console.log(goodbye);
  // goodbye ="27";
  // console.log(goodbye);

  return;
};



// Shadowing happens when the same variable is used in the local and global scope
var shadow = "Shadow";
 console.log(shadow);

// Logs "Hello"
function sayWhat() {
  console.log(shadow);
  return;
}

//Logs "Goodbye"
var sayWhatAgain = function () {
  shadow = "Goodbye"; 
  console.log(shadow);   
};

sayGoodbye();
sayGoodbyeAgain();
console.log(goodbye);
sayWhat();
sayWhatAgain();


console.log('Shadow', shadow);

//不太懂：查一下资料

