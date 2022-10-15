function newUser(name, age, country) {
  var name = name || "Oscar";
  var age = age || 34;
  var country = country || "Perú";
  console.log(name, age, country);
}

newUser();
newUser("David", 15, "Colombia");

function newAdmin(name = "Pedro", age = 32, country = "Chile") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Ana", 28, "Ecuador");
