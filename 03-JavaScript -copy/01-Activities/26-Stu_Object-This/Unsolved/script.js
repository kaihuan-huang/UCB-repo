// TODO: What does 'this' refer to?
//window (is an object)
console.log(this);

// TODO: What does 'this' refer to?
//Inside this function, this is window.object, global scope
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
//this is a window.object:child
//20
var child = { 
   age: 10,
   firstName:'kaihuan',
   lastName:'Huang',
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
   // fullname: function(){
   //    return this.firstName + ''+this.lastName
   // }
};

// TODO: What will this log? 
5750
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
