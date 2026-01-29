let bookName = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let status = prompt(
  "Nhập tình trạng sách (có sẵn / đã mượn / không có sẵn):",
).toLowerCase();
let borrowDays = Number(prompt("Nhập số ngày mượn:"));
let hasCard =
  prompt("Bạn đã có thẻ thư viện chưa? (có / không):").toLowerCase() === "có";

if (status === "có sẵn") {
  if (hasCard) {
    console.log("Chúc mừng, bạn có thể mượn sách này");
  } else {
    console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
  }
} else if (status === "đã mượn") {
  if (borrowDays < 30) {
    if (hasCard) {
      console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    } else {
      console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
  } else {
    console.log("Sách đã mượn quá hạn hoặc cần kiểm tra lại");
  }
} else if (status === "không có sẵn") {
  console.log(
    "Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau",
  );
} else {
  console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}
