// TODO: Import the parent class
const Vehicle = require('./vehicle');
// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(id, color, carPassengers) {
    super(is, 4, 'beep');
    this.numberOfWheels = 4;
    this.sound = 'beep';



  }
}

}
const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const checkPassengers {
  if(carPassengers.length <= 4){
  console.log(`There are ${this.carPassengers} in the car`)
}
return ("This car only seats 4 people. You have too many passengers!")
}


const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
