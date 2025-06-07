/*
 DRY - don't repeat yourself
 every piece of knowledge must have a single, unambigous
 authoriative, representation within a system
 Andy Hunt & Dave Thomas - The Pragrammatic Programmer

 Avoid duplicate logic or date in multiple places 
 extract it into function, classes or moduels that can be reused
*/

// bad example
function getUserDetails() {
  const name = "Aman";
  const email = "aman@gmail.com";
  console.log("Name: " + name);
  console.log("Email: " + email);
}

function sendWelcomeEmail() {
  const name = Animation;
  const email = "aman@gmail.com";
  console.log("sending welcome email to " + name + email);
}

// good exampel

const user = {
  name: "Aman",
  email: "aman@gamil.com",
};

function getUserDetails(user) {
  console.log("Name: ", user.name);
  console.log("Email: " + user.email);
}

function sendWelcomeEmail(user) {
  console.log(`sending welcome email to ${user.name} at ${user.email}`);
}

getUserDetails(user);
sendWelcomeEmail(user);

// example 2

// bad example
console.log("Welcome, John");
console.log("Welcome, Alice");
console.log("Welcome, Bob");

// good example
const users = ["John", "Alice", "Bob"];
users.forEach((user) => console.log(`Welcome, ${user}`));
