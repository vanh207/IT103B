let name = prompt("nhập tên người dùng: ");
let role = prompt("nhập vai trò admin/student/guest: ");
let account = prompt("nhập số dư tài khoản ");
let status = prompt(
  "Nhập true nếu đang hoạt động, hoặc để rỗng/nhập khác để coi như bị khóa",
);
let day = prompt("Ngày quá hạn trả sách: ");
let newRole = role.toLocaleLowerCase();
let newDay = Number(day);
let newAccount;
let account_v2 = Number(account);
let result;
let result_V2;
switch (newRole) {
  case "admin":
    result_V2 = "Chào Admin, bạn có toàn quyền hệ thống";
    break;
  case "student":
    result_V2 = "Chào sinh viên, bạn có thể mượn sách";
    break;
  case "guest":
    result_V2 = "Chào khách, bạn chỉ có thể đọc tại chỗ";
    break;
  default:
    result_V2 = "Lỗi: Vai trò không hợp lệ!";
    break;
}
if (name != "") {
  if (newRole == "admin" || newRole == "student") {
    if (account_v2 > 0 && status == "true") {
      result = "ĐƯỢC PHÉP MƯỢN SÁCH";
    } else {
      result =
        "YÊU CẦU BỊ TỪ CHỐI LÝ DO SỐ DƯ KHÔNG ĐỦ HOẶC TRẠNG THÁI THẺ KHÔNG HOẠT ĐỘNG";
    }
  } else {
    result = "YÊU CẦU BỊ TỪ CHỐI LÝ DO KHÔNG PHẢI ADMIN VÀ STUDENT";
  }
} else {
  result = "YÊU CẦU BỊ TỪ CHỐI LÝ DO TÊN ĐỂ TRỐNG ";
}
let day_V2;
if (newDay <= 0) {
  console.log("Cảm ơn bạn đã trả đúng hạn");
} else if (newDay > 1 && newDay < 5) {
  newAccount = newDay * 5000;
  day_V2 = `quá hạn ${newDay} ngày`;
} else if (newDay > 6 && newDay < 10) {
  newAccount = newDay * 10000;
  day_V2 = `quá hạn ${newDay} ngày`;
} else {
  newAccount = 200000;
  day_V2 = `quá hạn ${newDay} ngày`;
  console.log("TÀI KHOẢN BỊ KHÓA");
}
console.log("--- HỆ THỐNG MƯỢN TRẢ ---/n");
console.log("Người dùng: ", name);
console.log("Quyền hạn: ", result_V2);
console.log("Kết quả mượn: ", result);
console.log("Tình trạng trả sách: ", day_V2);
console.log("Tiền phạt: ", newAccount);
