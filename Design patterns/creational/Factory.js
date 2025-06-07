/*
 the factory pattern is a creation design pattern
 that provides an interface for creating objects,
 but lets subclasses or logic decides which class to instantiate.

 Rather than using new directly all over the place, you delegate object 
 creation to a centrailzied method

 Benefits
 1. avoid tight coupling between code and specific classes
 2. good when object creation involves logic or configuration
 3. useful when you need to creat many types of related objects
*/

class Car {
  drive() {
    console.log("driving a car");
  }
}

class Bike {
  drive() {
    console.log("riding a bike");
  }
}

class Truck {
  drive() {
    console.log("driving a truck");
  }
}

function vechicleFactory(type) {
  switch (type) {
    case "car":
      return new Car();
    case "bike":
      return new Bike();
    case "truck":
      return new Truck();
    default:
      throw new Error("unknow vehicles type");
  }
}

const vehicle1 = vechicleFactory("car");
const vehicle2 = vechicleFactory("bike");

vehicle1.drive();
vehicle2.drive();
