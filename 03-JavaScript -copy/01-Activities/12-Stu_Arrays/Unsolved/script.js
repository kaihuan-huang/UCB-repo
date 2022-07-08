// WRITE YOUR CODE HERE

// It's done when the total number of elements in the array is logged to the console.

// It's done when the message "Welcome to the class STUDENT_NAME" is logged using each element in the array.

// It's done when the first element in the array is replaced with the name of a new student.

// It's done when, after an if statement confirms that the first element in the array has been replaced, the message "REPLACED_NAME is in class" is logged.

var students = ['aaa', 'bbb', 'ccc', 'ddd']

console.log(students.length);

console.log('Welcome to the class', students[0]);
console.log('Welcome to the class', students[1]);
console.log('Welcome to the class', students[2]);
console.log('Welcome to the class', students[3]);

students[0]='eee'
console.log(students);

if (students[0]==='eee'){
    console.log(students[0],'is in the class.');
}

//How could you use the array's length property to access the last element in an array of any length?
var last_element = console.log(students[students.length-1])

//What is the first index in an array: `0` or `1`?  0



