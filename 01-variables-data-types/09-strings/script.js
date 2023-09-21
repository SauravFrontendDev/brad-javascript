let x;
const fName = "Saurav";
const age = 62;
x = "hello my name is " + fName + " and my age is " + age;

x = `HelloVolla, My Name is ${fName} and I have experience of ${age} years of earth.`;

console.log(x);

// String Properties and methods

const s = "Hello World";

console.log(s.length);
console.log(s[0]);
console.log(s.__proto__);
console.log(s.at(0));
console.log(s.indexOf("o"));
console.log(s.substring(4));
console.log(s.slice(1));

let t = "        trim function           ";

console.log(t);
console.log(t.trim());

t = t.trim().replace("trim", "scream");
console.log(t);
console.log(s.slice());

console.log(s.split(""));
