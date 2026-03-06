/* 1. reverse without cheating */

const numbers = [1,2,3,4,5,6,7,8,9,10];

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}



/* 2. even or odd */

let numberList = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numberList.length; i++ ){
    if (numberList[i] % 2 === 0 ){
        evenCount++;
    }else {
        oddCount++;
    }
}
console.log("Even count: " + evenCount);
console.log("Odd count: "+ oddCount);



/* 3. pattern builder    */
for (let i = 1; i <= 5; i++){
    let row = "";
    for (let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
}

