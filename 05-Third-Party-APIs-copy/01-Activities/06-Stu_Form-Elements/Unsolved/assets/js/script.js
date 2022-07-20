var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`


shoppingFormEl.on('submit', function(event){
    event.preventDefault();
    var input = $('#shopping-input');
    var listEl = $('<li>');
    listEl.text(input.val());
    shoppingListEl.append(listEl);
    //
    console.log(input);
 
});

