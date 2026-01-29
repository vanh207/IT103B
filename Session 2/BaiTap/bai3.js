let bookName = prompt("Nhập tên sách: ");
let category = prompt("Nhập thể loại (Khoa học/Lịch sử/Văn học/Truyện): ");
let status = prompt(
  "Tình trạng sách (Nhập 'sẵn' nếu có sẵn, hoặc bất kỳ để coi như đã mượn): ",
);

let lowerCategory = category.toLowerCase();
let isAvailable = status.toLowerCase() === "sẵn";

if (lowerCategory === "khoa học" || lowerCategory === "lịch sử") {
  if (isAvailable) {
    console.log("Sách này có sẵn trong thư viện");
  } else {
    console.log("Sách đã được mượn");
  }
} else if (lowerCategory === "văn học" || lowerCategory === "truyện") {
  console.log("Sách này có thể đọc giải trí");
} else {
  console.log("Thể loại không xác định");
}
