const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// Sets the value to 0
  let count = 0;

  //return a inner function which creates closure
  return function () {
  
   //Increase  the locally scoped 'count' variable by one
    count++;
   // Use a template literal to display the 'count' variable onto the button elemrnt
    this.textContent = `Clicks: ${count}`;
  };
};

// Adds an event listener to each individual button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
