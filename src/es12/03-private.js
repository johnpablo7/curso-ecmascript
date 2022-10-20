class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  #speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #addAge() {
    return this.age;
  }
  set #addAge(n) {
    this.age = n;
  }
}

const theo = new user("Davis", 15);
console.log(theo.addAge);
console.log((theo.addAge = 3));
