let n = Number(prompt("Nhập số lượng phần tử n:"));

if (isNaN(n) || n < 0) {
  console.log("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
  console.log("Không có ký tự số");
} else {
  let charArray = [];

  for (let i = 1; i <= n; i++) {
    let char = prompt("Nhập ký tự thứ " + i + ":");
    charArray.push(char);
  }

  let digitChars = [];
  for (let i = 0; i < charArray.length; i++) {
    if (
      charArray[i] >= "0" &&
      charArray[i] <= "9" &&
      charArray[i] !== " " &&
      charArray[i] !== ""
    ) {
      digitChars.push(charArray[i]);
    }
  }

  if (digitChars.length > 0) {
    console.log(digitChars.join(" "));
  } else {
    console.log("Không có ký tự số");
  }
}
