let nameBook = prompt("nhập tên sách: ");
let yearBook = prompt("nhập năm xuất bản sách: ");
let newYearBook = Number(yearBook);
let year = new Date().getFullYear();
let yearAge = year - newYearBook;
console.log("sách: ", nameBook);
console.log("năm xuất bản: ", yearAge);
