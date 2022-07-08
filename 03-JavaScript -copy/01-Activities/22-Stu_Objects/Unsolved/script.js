// It's done when the customerOrder object has three properties that store the drink's name, the number of sugars, and a Boolean indicating whether the order is ready.

// It's done when the drink name and the number of sugars is logged to the console.

// It's done when, if the order is ready, the message "Ready for pick-up" logs.

// It's done when, if the order is not ready, the message "Still in order queue" logs.
//WRITE YOUR CODE BELOW

var customerOrder = {
    name:"Milk",
    suger:2,
    isReady:false
}

console.log(customerOrder.name);

console.log(customerOrder["suger"]);

console.log(customerOrder.name + customerOrder.suger)

if (customerOrder.isReady){
    console.log('Ready for pick-up');
}
else{
    console.log("Still in order queue");
}

// What is a for...in statement? How can you use it to iterate over an object’s properties?
//prop is a changable variable,[prop]
//快速提取所有property的方法

for (prop in customerOrder){
    console.log(prop,customerOrder[prop]);
}