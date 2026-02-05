let n = Number(prompt("Nhập số lượng phần tử n:"));

if (n < 0) {
  console.log("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
  console.log("Mảng không có phần tử");
} else {
  let numbers = [];

  for (let i = 1; i <= n; i++) {
    let value = Number(prompt("Nhập phần tử thứ " + i + ":"));
    numbers.push(value);
  }

  console.log(numbers);

  let negativeCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i]) && numbers[i] < 0) {
      negativeCount++;
    }
  }

  console.log(negativeCount);
}
