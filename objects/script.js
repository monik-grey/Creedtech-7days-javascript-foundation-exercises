/* 1. student record */

let student = {
  name: "Monica",
  age: 25,
  courses: ["Mathematics", "Physics", "Computer Science"],
  isGraduated: true
};
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}


/* 2. store inventory */
let product = {
  name: "solar",
  price: 30000,
  quantity: 3
};
function calculateTotalValue(prod) {
  return prod.price * prod.quantity;
}
let total = calculateTotalValue(product);
console.log("Total value:", total);