const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "raspberry"];

// fruits.push(berries);

console.log(fruits);

// console.log(fruits[3][1]);

// const allFruits = [...fruits, ...berries];
// console.log(allFruits);

// console.log(allFruits);

let x = fruits.concat(berries);
console.log(x);

x = [fruits, berries];
console.log(x);
console.log(x.flat());

x = [1, 2, [3, 4, 5], 6, 7, [8, 9], [10, 11, 12, 13]];

console.log(x);
console.log(x.flat());
console.log(Array.isArray("Hello"));
console.log(Array.from("abcdefghijklmnopqrstuvwxyz"));
