let n = Number(prompt("Nhập số lượng phần tử n:"));

if (n < 0) {
  console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
  console.log("Mảng không có phần tử");
} else {
  let charArray = [];
  for (let i = 1; i <= n; i++) {
    let char = prompt("Nhập ký tự thứ " + i + ":");
    charArray.push(char);
  }

  let sum = 0;
  let hasNumber = false;

  for (let i = 0; i < charArray.length; i++) {
    let value = Number(charArray[i]);

    if (!isNaN(value) && charArray[i].trim() !== "") {
      sum += value;
      hasNumber = true;
    }
  }

  if (hasNumber) {
    console.log(sum);
  } else {
    console.log("Không có phần tử nào là số");
  }
}
