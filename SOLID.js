/*
 S  - responsibility              - each class does one job
 O  - extensibility               - add new features without changing old code
 L  - substitutablity             - subclasses shouldn't break base behaviour
 I  - clean APIs                  - don't force classes to implement unused stuff
 D  - decoupling via abstraction  - depend on general contract no specifics
*/

/*
 SRP - single responsibility principle
 a class should be a single responsibilty

 like jack of all master of none 
 
 bad example
 one player representing in all the sports
 footballer 
 wresler
 sprinter
 marthon runner

 good example
 Their training and schedule is developed to match the game they paly
 footballer playing football
 wreatler only wreatling
 sprinter run 100m
 mathon runner only run 42km
*/

// bad example
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDB() {
    // saving in db
  }

  sendEmail() {
    // sending signup email
  }
}

// good example

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserDB {
  save(user) {
    // save user to db
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    // send email logic
  }
}

/*
 O - open/closed principle OCP
 entities should be open for extension but closed for modification
*/

// bad example
class Discount {
  getDiscount(type) {
    if (type === "student") return 10;
    if (type === "teacher") return 20;
  }
} // we need to modify the function every time we add a new type

// good example using polymorphism
class Discount {
  getDiscount() {
    return 0;
  }
}

class StudentDiscount extends Discount {
  getDiscount() {
    return 10;
  }
}

class TeacherDiscount extends Discount {
  getDiscount() {
    return 20;
  }
}

/*
 L - Liskov substitute principle
 subclasses should be substituable for their base classes without breaking the app.

 superclass sc
 baseclass bc 

 we can use object of bc instead of sc since it is the child.

 when a child class cannot perform the same action as its parent class 
 this causes bug.

 if you class is created from another class, 
 one is child and the other is parent respectively. 
 The child should be able to do everything the parent class 
 can do. 

 It is also called inheritence.

 The child class should be able to process the same 
 request and deliver the same result as the parent class 
 or it could deliver the result of the same type.

 This principle aims to enforce consistency so that parent 
 class or its child class can be used in the same way 
 without any errors.
*/

// bad example
class Bird {
  fly() {
    console.log("flying");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("ostrict can't fly");
  }
}

// good example

class Bird {
  move() {
    console.log("bird moves");
  }
}

class Sparrow extends Bird {
  move() {
    console.log("flying");
  }
}

class Ostrich extends Bird {
  move() {
    console.log("running");
  }
}

/*
    interface segragation princinple ISP
    no client should be forced to depend on method it does not use.

    Note: javascript doesn't have interace but the idea 
    is to split large classes into smaller more specific one

    goal
    classes only executes set of actions that it uses
    which are not used must be removed or moved as a separate class
*/

// bad example
class Machine {
  print() {}
  scan() {}
  fax() {}
}

class OldPrinter extends Machine {
  fax() {
    throw new Error("not supported");
  }
}

// good example
class Printer {
  print() {}
}

class Scanner {
  scan() {}
}

class Fax {
  fax() {}
}

class OldPrinter extends Printer {}

/*
 D - dependency inversion principle DIP
 high level modules should not depend on low-level modules
 both should depend on abtraction
*/

// bad example
class MySQLDatabase {
  save(data) {
    console.log("Saving to MySQL");
  }
}

class App {
  constructor() {
    this.db = new MySQLDatabase(); // tightly coupled
  }

  saveData(data) {
    this.db.save(data);
  }
}

// good example

class App {
  constructor(database) {
    this.db = database;
  }

  saveData(data) {
    this.db.save(data);
  }
}

class MySQLDatabase {
  save(data) {
    console.log("Saving to MySQL");
  }
}

class MongoDB {
  save(data) {
    console.log("Saving to MongoDB");
  }
}

const app = new App(new MongoDB());
app.saveData({ name: "John" });
