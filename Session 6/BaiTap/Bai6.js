let inputArr = ["JavaScript", 0, null, true, 7, " "];
let result = [];

for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i]) {
    result.push(inputArr[i]);
  }
}

console.log(result);
