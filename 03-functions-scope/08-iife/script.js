(function () {
  const user = "Jonas";
  console.log(user);
  const hello = () => console.log("Hi from IIFE");
})();

(function nameWrite(name) {
  console.log("Hello " + name);
})("Shawn Michaels");
