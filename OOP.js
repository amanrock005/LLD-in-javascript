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

const c1 = new Car("Honda", "City", 2022);

c1.start();
c1.accelarte(50);
c1.brake(20);
c1.stop();

// you can create objects that are of same/different car brands model and year

/*
 encapsulation
 Hiding the implementation of the object 
 and only exposing necessary details through public methods
 or variable

 Why use encapsulation?
 Certain aspect of an object should not be public facing 
 since the user can change/update the functionality or purpose 
 of the object.

 In js all all methods in a class are public
*/

// public methods
class Car {
  drive() {
    console.log("Driving the car");
  }
}

const car1 = new Car();
car1.drive();

// private method
class Car {
  #engineStart() {
    console.log("Engine started (private method)");
  }

  start() {
    this.#engineStart();
  }
}

const car = new Car();
car.start(); // allowed
car.#engineStart(); // not allowed since it is private

// public variable
// public properties can be accessed and modified from outside the class

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.make); // output: toyota
myCar.model = "Corolla";

// private variable
// private properties start with # and can only be accessed inside the class

class Car {
  #mileage = 0;

  addMiles(miles) {
    this.#mileage += miles;
  }

  getMileage() {
    return this.#mileage;
  }
}

const mycar = new Car();
mycar.addMiles(100);
console.log(mycar.getMileage()); // correct
console.log(mycar.#mileage); // incorrect

/*
 Inheritance is a mechanism by which a class inherits the properties 
 of another class. 
 subclass or child class inherting properties from parent of super class

 it promotes code reusablity
*/

class Vehicles {
  constructor(type) {
    this.type = type;
  }

  start() {
    console.log(`${this.type} is starting`);
  }

  stop() {
    console.log(`${this.type} is stopping`);
  }
}

class Car extends Vehicles {
  // car inherits start() and stop() from vehicles
  constructor(brand, model) {
    super("Car"); // calls the baseclass constructor
    this.brand = brand;
    this.model = model;
  }

  honk() {
    console.log(`${this.brand} ${this.model} says: beep beep!`);
  }
}

const latestCar = new Car("Toyota", "Camry");
latestCar.start();
latestCar.honk();
latestCar.stop();

/*
 polymorphism 
 It allows you to write code which can work with different datatypes of different number of arguments
 compile time polymorphism - method overloading
 multiple methods with the same name but different parameters
 Note: JS doesn't support it natively.
 JS allows one method with a given name in a class

 run time polymorphism - method overridding
 child class overrides a method from the base class
*/

class Calculator {
  add(a, b, c) {
    if (typeof c === "number") {
      return a + b + c;
    }
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.add(2, 3, 4));

// runtime

class Animal {
  speak() {
    console.log("anmial speak");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

function makeItSpeak(animal) {
  animal.speak();
}

const a = new Animal();
const d = new Dog();
const c = new Cat();

makeItSpeak(a);
makeItSpeak(d);
makeItSpeak(c);

/*
 abstraction is only showing the necessary features to the outside 
 and hiding the complex internal details
*/
