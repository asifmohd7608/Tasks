// declaration

const person = {
  firstName: "lional",
  lastName: "messi",
  age: "35",
  club: "barca",
};
console.log(person.name);
console.log(person.age);
console.log(person.club);

person.country = "argentina";

console.log(person);

//adding a function
person.fullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person.fullName());

// objects are immutable

const duplicate = person;
console.log(duplicate);

duplicate.firstName = "neymar";
duplicate.lastName = "jr";

console.log(`duplicate : ${duplicate.fullName()}`);
console.log(`person : ${person.fullName()}`);
//both person and duplicate points to the same reference in memory, so changing duplicates values, will change the value of the reference in memory
