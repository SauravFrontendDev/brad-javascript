// Primitive Values are stored on the stack

const name = "saurav";
const age = 41;

// Reference values are stored on heap

const person = {
  name: "Brad",
  age: 23,
};

let newName = name;
console.log(name, newName);

newName = "Samsher Bahadur";
console.log(name, newName);

let newPerson = person;
console.log(person, newPerson);

newPerson.name = "tamannah";
newPerson.age = 32;

console.log(person, newPerson);
