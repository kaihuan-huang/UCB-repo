// As a member of the class, I want to store a list of my classmates and use that list to create a greeting for each student on the list.

// It's done when the names of five classmates are stored in a single variable named students.

// It's done when the total number of elements in the students array is logged to the console.

// It's done when, using a for loop, the greeting "Great to see you, CLASSMATE_NAME!" logs to the console for each classmate's name in the students array.

// 💡 Hints
// How can you access each element using the element's index and the array name?

// 🏆 Bonus
// If you have completed this activity, work through the following challenge with your partner to further your knowledge:

// What’s a while loop?

//WRITE YOUR CODE BELOW

var students=['aaa', 'bbb', 'ccc', 'ddd', 'eee']
console.log(students.length);

for(var i=0; i<=students.length-1; i++){
    console.log('Great to see you,', students[i]+'!' );
}

for(var i=students.length-1; i>=0; i--){
    console.log('Great to see you,', students[i]+'!' );

}

var i=(students.length-1);
while(i>=0){
    console.log('Great to see you,', students[i]+'!' )
    i--;
}
