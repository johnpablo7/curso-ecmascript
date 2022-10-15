// enhanced object literals

function newUser(user, age, country, uid) {
  return {
    user,
    age,
    country,
    id: uid,
  };
}

console.log(newUser("john", 34, "PE", 1));
