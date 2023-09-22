const arr = [1, 2, 3, 4, 5];

// arr.push(6);
// arr.unshift(0);
// arr.reverse();

arr.reverse();
arr.unshift(6);
arr.push(0);
console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2.slice(1)];
console.log(arr3);
const arr4 = arr1.slice(0, -1).concat(arr2);
console.log(arr4);
