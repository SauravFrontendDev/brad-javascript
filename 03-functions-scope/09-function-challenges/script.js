const getCelsius = (far) => ((far - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(104)} \xB0C`);

console.log(Math.min(1, 2, 3, 4, 5, 6, 7));
console.log(Math.max(1, 2, 3, 4, 5, 6, 7));

const minMax = (arr) => ({ min: Math.min(...arr), max: Math.max(...arr) });
console.log(minMax([1, 2, 3, 4, 5]));

(function perimeter(l, b) {
  console.log(
    `The area of a rectangle with a length of ${l} and a width of ${b} is ${
      l * b
    }.`
  );
})(55, 58);
