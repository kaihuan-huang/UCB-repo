// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;
const rubric = [
  {
    letter: 'A',
    max: 100,
    min: 90,
  },
  {
    letter: 'B',
    max: 90,
    min: 80,
  },
  {
    letter: 'C',
    max: 80,
    min: 70,
  },
  {
    letter: 'D',
    max: 70,
    min: 60,
  }, {
    letter: 'F',
    max: 60,
    min: 0,
  }

]
function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {

      const obj = rubric.find((grabObj) => inRange(input, grabObj.min, grabObj.max));
      return obj.letter;
    }

  }

  if (typeof input === 'string') {
    const obj = rubric.find((grabObj) => grabObj.letter.toLowerCase() === input.toLowerCase());

    return `${obj.min} - ${obj.max}`;

  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(77));
console.log('John.displayGrade():', John.displayGrade('C'));
