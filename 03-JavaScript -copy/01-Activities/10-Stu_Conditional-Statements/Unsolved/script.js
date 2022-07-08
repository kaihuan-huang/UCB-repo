// Change the values and operators below to test your algorithm meets all conditions
var x = 25; 
var expression1 = (x < 25); 
var expression2 = (x < 50); 

// Write Your JavaScript Code Here
if ( expression1&&expression2 ) {
    console.log('True ✅ True ✅');
}
else if (expression1||expression2){
    if(expression1)
        console.log('True ✅ False ❌')
    else
        console.log("False ❌ True ✅")
        
}
else
    console.log("False ❌ False ❌" )



 //   swich .. case
switch(true){
    case expression1&&expression2:
        console.log('True ✅ True ✅');
        break;
    case expression1:
        console.log('True ✅ False ❌');
        break;
    case expression2:
        console.log('False ❌ True ✅');
        break;
    default:
        console.log("False ❌ False ❌");
        break;
}