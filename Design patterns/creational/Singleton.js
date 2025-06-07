/*
 the singeton pattern ensures that a class has only 
 one instance and provides a global point of access 
 to that instance

 why use singleton?
 useful when exactly one object is needed to coordinate actino
 across a system.

 example
 1. database connection manager
 2. looger
 3. configuration manager
 4. global state in vanilla j
*/

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.timestamp = new Date().toISOString();

    Singleton.instance = this;
  }

  getTime() {
    return this.timestamp;
  }
}

const a = new Singleton();
const b = new Singleton();

console.log(a === b);
console.log(a.getTime());
console.log(b.getTime());
