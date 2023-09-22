const numbers = [22, 56, 14, 89, 71, 32, 1, 98, 66];

// console.log(numbers);

const fruits = new Array(
  "apple",
  "cherry",
  "guava",
  "mango",
  "fig",
  "banana",
  "orange"
);

// console.log(fruits);

// console.log(fruits[0]);
// console.log(numbers[0]);

let x = `my favourite fruit is ${fruits[3]}`;

// console.log(x);

const mixed = [12, "orange", true, 45, 1.256, ["a", "c", "d"]];

// console.log(mixed);

// console.log(fruits.length);

// console.log(fruits);
fruits[0] = "watermelon";
fruits[fruits.length] = "blueberry";
// console.log(fruits);

// console.log(numbers);

numbers.push(111);
numbers.push(9);

numbers.pop();
numbers.unshift(99);
numbers.shift();

// console.log(numbers);
numbers.reverse();

// console.log(numbers);

let y;

y = numbers.includes(32);
y = numbers.includes(33);

y = numbers.indexOf(58);

console.log(numbers);

// y = numbers.splice(1, 8);
// console.log(y);

// console.log(numbers);
// let z = numbers.slice(1, 8);
// console.log(z);

// console.log(numbers);
