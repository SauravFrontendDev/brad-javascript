//  Type Conversion - Explicitly converting a value to other data type

//  STRING TO NUMBER
let amount = "hello";

console.log(amount, typeof amount);

// amount = parseFloat(amount);
// amount = +amount;
amount = Number(amount);

console.log(amount, typeof amount);

// NUMBER To STRING

// amount = amount.toString();
// amount = String(amount);

// console.log(amount, typeof amount);

// NUMBER TO BOOLEAN

amount = Boolean(amount);

console.log(amount, typeof amount);
