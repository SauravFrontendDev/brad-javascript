const firstName = "Saurav";
const lastName = "Verma";
const age = 25;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person);

const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "Saurav",
  },
};

const {
  id,
  title,
  user: { name },
} = todo;
console.log(id, title, name);

const numbes = [23, 45, 15, 89, 75];

const [first, ...rest] = numbes;

console.log(rest);
