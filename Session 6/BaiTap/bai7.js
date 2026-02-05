let n = Number(prompt("Nhập số lượng phần tử n:"));

if (n < 0) {
  console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
  console.log("Mảng không có phần tử nào");
} else {
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    let num = Number(prompt("Nhập phần tử thứ " + i + ":"));
    numbers.push(num);
  }

  if (numbers.length < 2) {
    console.log("Mảng cần ít nhất 2 phần tử để tìm số lớn thứ hai");
  } else {
    numbers.sort(function (a, b) {
      return a - b;
    });

    let max = numbers[numbers.length - 1];
    let secondMax = -Infinity;

    for (let i = numbers.length - 2; i >= 0; i--) {
      if (numbers[i] < max) {
        secondMax = numbers[i];
        break;
      }
    }

    if (secondMax === -Infinity) {
      console.log("Không có số lớn thứ hai (tất cả các số bằng nhau)");
    } else {
      console.log(secondMax);
    }
  }
}
