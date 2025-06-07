/*
 the builder pattern is a creational 
 design pattern used to construct a complex 
 object step-by-step. It allows you to build different
 variations of an objects using the same construction process

 Benefits of builder pattern
 1. when the obect being created has many optional fields or configurations
 2. when you want more control over how an object is created
 3. to avoid telescoping constructor (too many paramters)
*/

class Burger {
  constructor(bun, patty, cheese, lettuce, tomato) {
    this.bun = bun;
    this.patty = patty;
    this.cheese = cheese;
    this.lettuce = lettuce;
    this.tomato = tomato;
  }
}

const burger = new Burger("sesame", "beef", true, false, true);
// not efficient in case you want to skip some ingredients

// with builder pattern

class Burger {
  constructor() {
    this.bun = "plain";
    this.patty = "veg";
    this.cheese = false;
    this.lettuce = false;
    this.tomato = false;
  }
}

class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }

  addBun(type) {
    this.burger.bun = type;
    return this;
  }

  addPatty(type) {
    this.burger.patty = type;
    return this;
  }

  addChesse() {
    this.burger.cheese = true;
    return this;
  }

  addLettuce() {
    this.burger.lettuce = true;
    return this;
  }

  addTomato() {
    this.burger.tomato = true;
    return this;
  }
  build() {
    return this.burger;
  }
}

const myBurger = new BurgerBuilder()
  .addBun("seasme")
  .addPatty("chicken")
  .addChesse()
  .addTomato()
  .build();

console.log(myBurger);
