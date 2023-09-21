// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = "developer";

const result = myString.charAt(0).toUpperCase() + myString.slice(1);

console.log(result);

const result2 = myString.at(0).toUpperCase() + myString.substring(1);

console.log(result2);

const result3 = `${myString.at(0).toUpperCase()}${myString.slice(1)}`;

console.log(result3);
