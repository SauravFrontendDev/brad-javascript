console.log("Saurav Verma");
console.log(100);
console.log(new Date().toISOString());
console.log(new Date().toUTCString());

x = 200;
console.log(x);

console.error("You are making a mistake");
console.warn("I will tell mom");

// console.table("I will tell mom");

console.group("simple");
const firstName = "saurav";
const lastName = "verma";
const age = 25;
const dreams = "Get a job";
console.table({ firstName, lastName, age, dreams });
console.groupEnd();

const styles = "padding:10px; background:pink; color:brown;";

console.log(
  "%cLorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius odio consequuntur enim error odit, amet, magni molestias, a non accusantium qui quia voluptate sed minus fuga iste? Quas, repellendus.",
  styles
);
