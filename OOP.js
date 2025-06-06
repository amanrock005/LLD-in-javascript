/*
 object oriented programming is a software development 
 concepts which is build on top of classes and objects.

 The benefits of using OOP are
 1. easy to maintain code
 2. easy to scale code
 3. easy to understand code


 class is a blueprint that defines how an object is going to look and behave.
 Object is an instance of class or a variable of datatype of class. 
*/

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting`);
  }

  accelarte(amount) {
    this.speed += amount;
    console.log(`${this.make} ${this.model} is now going at ${this.speed}`);
  }

  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`${this.make} ${this.model} slowed down to ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.make} ${this.model} has stopped`);
  }
}

const myCar = new Car("Honda", "City", 2022);

myCar.start();
myCar.accelarte(50);
myCar.brake(20);
myCar.stop();
