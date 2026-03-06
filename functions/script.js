/* 1. analyze scores */

function analyzeScores(scores) {
  let highest = scores[0];
  let lowest = scores[0];
  let sum = 0;

  for (let score of scores) {
    if (score > highest) highest = score;
    if (score < lowest) lowest = score;
    sum += score;
  }

  return {
    highest,
    lowest,
    average: sum / scores.length
  };
}
const myScores = [70, 87, 92, 60, 100];
console.log(analyzeScores(myScores));



/* 2. password checker */

function validatePassword(password) {
  const rules = [
    { test: pwd => pwd.length >= 8, message: "Password must be at least 8 characters." },
    { test: pwd => /\d/.test(pwd), message: "Password must contain at least one number." }
  ];
  const checkRules = rules.every(rule => rule.test(password));

  return checkRules ? "Valid" : "Invalid";
}
console.log(validatePassword("monicaede"));
console.log(validatePassword("monicaede123"));
console.log(validatePassword("abc12"));



/*2. multiply everything */

function multiplyNum(...numbers) {
  let total = 1;

  for (let num of numbers) {
    total *= num;
  }

  return total;
}
console.log(multiplyNum(2, 4, 8, 22, 40))