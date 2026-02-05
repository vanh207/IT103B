let numbers = [];
let count = 0;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Nhập phần tử thứ " + i + ":"));
  numbers.push(num);
}

let result = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 10) {
    result.push(numbers[i]);
    count++;
  }
}

if (count > 0) {
  console.log("Các số lớn hơn hoặc bằng 10 là: " + result.join(" "));
  console.log("Tổng cộng có " + count + " số.");
} else {
  console.log("Không có số nào lớn hơn hoặc bằng 10");
}
