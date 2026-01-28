
let originalBookName = prompt("nhập tên sách:");
let bookIndex = prompt("nhập số thứ tự của sách trong thư viện:");
let normalizedBookName = originalBookName.trim().toUpperCase();
let bookCode = `LIB - ${normalizedBookName} - ${bookIndex}`;
console.log("Tên sách gốc:", originalBookName);
console.log("Mã sách sau chuẩn hóa:", bookCode);
