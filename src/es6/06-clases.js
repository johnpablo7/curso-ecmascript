// declarando
class User {}

// instancia de una clase
// const newUser = new User();

class user {
  // metodos
  greeting() {
    return "Hello";
  }
}

const john = new user();
console.log(john.greeting());
const oscar = new user();
console.log(oscar.greeting());

// constructor
class user {
  constructor() {
    console.log("Nuevo usuario");
  }
  greeting() {
    return "Hello";
  }
}

const jose = new user();

// this
class user {
  constructor(name) {
    this.name = name;
  }
  // metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user("Ana");
console.log(ana.greeting());

// setters getters
class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get addAge() {
    return this.age;
  }
  set addAge(n) {
    this.age = n;
  }
}

const theo = new user("Davis", 15);
console.log(theo.addAge);
console.log((theo.addAge = 3));
