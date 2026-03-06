/* 1. merge and extend */
const fruits = ["mango", "banana"];
const meat = ["chicken", "beef"];

const foodItems = [...fruits, "cherry", ...meat, "pork"];
console.log(foodItems)

/* 2. clone and update */
const product = {
  name: "solar",
  price: 300,
  quantity: 3
};

const updatedProduct = {
  ...product,
  price: 900
};

console.log(updatedProduct);