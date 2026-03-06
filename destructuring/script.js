/* 1. array destructuring */

const items = ["Solar", "Table", "Laptop", "Phone"];
const [firstItem, secondItem, ...remainingItems]=items;

console.log(firstItem);
console.log(secondItem);
console.log(remainingItems);


/* object destructuring */

const user = {
  name: "Monica",
  age: 25,
  country: "Nigeria"
};

const { name, age: userAge } = user;

console.log(name);
console.log(userAge);