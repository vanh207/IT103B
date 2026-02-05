let n = Number(prompt("Nhập số lượng phần tử n:"));

if (n < 0) {
  console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
  console.log("Không phải dãy số fibonacci");
} else {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let val = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    arr.push(val);
  }

  console.log(arr);

  let isFibonacci = true;

  if (n < 3) {
    isFibonacci = false;
  } else {
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + arr[i - 2]) {
        isFibonacci = false;
        break;
      }
    }
  }

  if (isFibonacci) {
    console.log("Là dãy số fibonacci");
  } else {
    console.log("Không phải dãy số fibonacci");
  }
}
