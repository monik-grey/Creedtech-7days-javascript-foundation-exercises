/* 1. sum function */
function sumAll(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sumAll(11, 27, 32, 42, 50)); 


/* 2. first vs the rest */
function argumentt(first, ...rest) {
  console.log("First argument:", first);
  console.log("Rest of the arguments:", rest);
}
argumentt(100, "Monica", "JS", "Rocks");