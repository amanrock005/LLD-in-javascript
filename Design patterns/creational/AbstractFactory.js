/*
 the abstract factory pattern is a creational 
 pattern that provides an interface for creating 
 familiies of related or dependent objects without specifing their exact 
 classess

*/

/*

feature        factory                         abstract factory

creates        one product                     multiple related products
focus          one level of object creation    groups of related objects
use case       simple creation                 complex object families(theme or cross flatoform or devices)   

*/

// step 1 define individual products

class LightButton {
  render() {
    console.log("renering light button");
  }
}

class LighCheckbox {
  render() {
    console.log("rendering light checkbox");
  }
}

class DarkButton {
  render() {
    console.log("rendering dark button");
  }
}

class DarkCheckbox {
  render() {
    console.log("rendering dark checkbox");
  }
}

// step 2 : create abstract factory
class ThemeFactory {
  createButton() {}
  createCheckbox() {}
}

// step 3: create concrete factories

class LightThemeFactory extends ThemeFactory {
  createButton() {
    return new LightButton();
  }
  createCheckbox() {
    return new LighCheckbox();
  }
}

class DarkThemeFactory extends ThemeFactory {
  createButton() {
    return new DarkButton();
  }
  createCheckbox() {
    return new DarkCheckbox();
  }
}

// step 4: use the factory

const factory = new DarkThemeFactory();

const button = factory.createButton();
const checkbox = factory.createCheckbox();

button.render(); // rendering dark button
checkbox.render(); // rendering dark checkbox
