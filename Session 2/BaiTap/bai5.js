let bookName = prompt("Nhập tên sách:");
let status = prompt("Nhập trạng thái (có sẵn / đã mượn):").toLowerCase();
let publishYear = Number(prompt("Nhập năm xuất bản:"));

let currentYear = new Date().getFullYear();
let age = currentYear - publishYear;

if (status === "có sẵn") {
  if (age <= 5) {
    console.log("Sách này mới và có sẵn để mượn");
  } else {
    console.log("Sách này có sẵn nhưng đã lâu năm");
  }
} else if (status === "đã mượn") {
  if (age <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
  } else {
    console.log("Sách này đã mượn và khá cũ");
  }
} else {
  console.log("Trạng thái sách không hợp lệ");
}
