class Shape {
  // Just like constructor functions, classes can accept arguments
  //this is object constructor
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
    console.log('this', this);
  }
}

const shape = new Shape(25, 25);

shape.printInfo();
