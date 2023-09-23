function sayHello() {
  alert("I am saying Hello");
}

// sayHello();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(56, 44);

function sub2(num) {
  return num - 2;
}
const result = sub2(10002);
console.log(result);

function registerUser(user = "Bottel") {
  return `${user} is registered.`;
}

console.log(registerUser("Mbape"));

function sum(...num) {
  let result = 0;
  for (const n of num) {
    result += n;
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

console.log(loginUser({ name: "Jonas schmedtmann", id: 23 }));

//

const arr = [2, 5, 9, 7, 6];

function randomArrElem(arr) {
  const randomIndex = Math.ceil(Math.random() * arr.length);
  console.log(randomIndex);
  return arr[randomIndex];
}

console.log(randomArrElem(arr));
