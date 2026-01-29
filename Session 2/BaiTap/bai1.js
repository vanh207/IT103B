let bookName = prompt("Nhập tên sách:");
let author = prompt("Nhập tên tác giả:");
let publishYear = Number(prompt("Nhập năm xuất bản:"));
let currentYear = new Date().getFullYear();
console.log(`--- Thông tin sách: ${bookName} ---`);
console.log(`Tác giả: ${author}`);
if (publishYear === currentYear) {
  console.log("Thông báo: Đây là sách mới!");
} else if (currentYear - publishYear <= 5 && currentYear - publishYear > 0) {
  console.log("Thông báo: Sách khá mới.");
} else if (publishYear > currentYear) {
  console.log("Thông báo: Năm xuất bản không hợp lệ (lớn hơn năm hiện tại)!");
} else {
  console.log("Thông báo: Sách đã cũ.");
}
