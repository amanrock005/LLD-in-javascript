/*
 the prototype pattern is a creational design pattern that lets 
 you create new objects by cloning the existing ones.
 Instead of creating them from scratch via constructor or classes

 Benefits
 1. object creation is expensive
 2. you need many similar objects
 3. avoid re-instantiating with the smae properties/config

 Filling a form. Instead of filling all fields 
 again for a second form you duplicate the first form
 and change the required fields.
*/

const carPrototype = {
  wheels: 4,
  drive() {
    console.log(`driving a ${this.brand} car`);
  },
};

const car1 = Object.create(carPrototype);
car1.brand = "Toyota";

const car2 = Object.create(carPrototype);
car2.brand = "BMW";

car1.drive();
car2.drive();

/*
 in js  every obejct has a prototype via
 Object.create() or through class 
 inheritence
*/

let base = {
  greet() {
    console.log("hello!");
  },
};

let clone = Object.create(base);
clone.greet();

// or with classes

class Person {
  constructor(name) {
    this.name = name;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}

const p1 = new Person("Aman");
const p2 = p1.clone();

console.log(p2.name);
