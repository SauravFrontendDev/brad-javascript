const calculator = (num1, num2, operator) => {
  let result;

  if (!num1 || !num2) {
    result = "Enter valid Numbers";
    return;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result = "Invalid Operator";
      break;
  }

  console.log(result);
  return result;
};

calculator(5, 2, "+"); // returns 7
calculator(5, 2, "-"); // returns 3
calculator(5, 2, "*"); // returns 10
calculator(5, 2, "/"); // returns 2.5
calculator(5, 2, "&"); // returns an error message
