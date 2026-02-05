let numbers = [];

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Nhập phần tử thứ " + i + ":"));

  if (numbers.indexOf(num) !== -1) {
    alert("Số này đã tồn tại, vui lòng nhập số khác!");
    i--;
    continue;
  }

  numbers.push(num);
}

if (numbers.length > 0) {
  let max = numbers[0];
  let position = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
      position = i;
    }
  }

  console.log("Số lớn nhất: " + max);
  console.log("Vị trí: " + position);
} else {
  console.log("Không có số lớn nhất");
}
