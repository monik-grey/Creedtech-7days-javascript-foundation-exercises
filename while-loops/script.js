/*1. countdown with a twist */
let numbers = 20;
while (numbers >= 1) {
    if (numbers % 3 === 0) {
        numbers--;
        continue;
    }
    console.log(numbers);
    numbers--;
}

/*2. find the secret number */
let secretNumber = 7;
let newVar = 1;
let attempts = 0;

while (newVar !== secretNumber){
  newVar++;
  attempts++;
}
console.log("attempts:" + attempts)
