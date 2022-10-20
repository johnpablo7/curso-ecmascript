const user = { username: "johnpv", age: 34, country: "PE" };
const { username, ...values } = user;
console.log(username);
console.log(values);
