let loginCount = 0;
let isLoginSuccess = false;

while (loginCount < 3) {
  let username = prompt("Nhập tài khoản:");
  let password = prompt("Nhập mật khẩu:");

  if (username === "admin" && password === "12345") {
    alert("Đăng nhập thành công!");
    isLoginSuccess = true;
    break;
  } else {
    loginCount++;
    alert(
      "Sai tài khoản hoặc mật khẩu! Bạn còn " + (3 - loginCount) + " lần thử.",
    );
  }
}
if (isLoginSuccess) {
  let libraries = ["Toán", "Văn", "Anh"];
  let choice;

  while (choice !== 7) {
    let menu =
      "=== HỆ THỐNG QUẢN LÝ THƯ VIỆN ===\n" +
      "1. Nhập thêm lô sách mới\n" +
      "2. Hiển thị danh sách sách\n" +
      "3. Tìm kiếm sách\n" +
      "4. Cập nhật tên sách\n" +
      "5. Đảo ngược kệ sách\n" +
      "6. Nhập kho từ nguồn khác\n" +
      "7. Thoát chương trình\n" +
      "Lựa chọn của bạn:";

    choice = Number(prompt(menu));

    switch (choice) {
      case 1:
        let inputString = prompt(
          "Nhập danh sách tên sách (cách nhau bởi dấu phẩy):",
        );
        if (inputString) {
          let newBatch = inputString.split(",");
          for (let i = 0; i < newBatch.length; i++) {
            libraries.push(newBatch[i].trim());
          }
          console.log(
            "=> Đã thêm thành công " + newBatch.length + " cuốn sách.",
          );
        }
        break;

      case 2:
        console.log("--- DANH SÁCH SÁCH HIỆN CÓ ---");
        for (let i = 0; i < libraries.length; i++) {
          console.log(i + 1 + ". " + libraries[i]);
        }
        break;

      case 3:
        let searchName = prompt("Nhập tên sách cần tìm:");
        let foundIdx = libraries.indexOf(searchName);
        if (foundIdx !== -1) {
          console.log(
            "=> Sách [" +
              searchName +
              "] được tìm thấy tại vị trí (chỉ số): " +
              foundIdx,
          );
        } else {
          console.log("=> Không tìm thấy.");
        }
        break;

      case 4:
        let oldName = prompt("Nhập tên sách cần sửa:");
        let updateIdx = libraries.indexOf(oldName);
        if (updateIdx !== -1) {
          let newName = prompt("Nhập tên mới của sách:");
          libraries[updateIdx] = newName;
          console.log("=> Cập nhật thành công!");
        } else {
          console.log("=> Lỗi: Sách không tồn tại.");
        }
        break;

      case 5:
        libraries.reverse();
        console.log("--- KỆ SÁCH SAU KHI ĐẢO NGƯỢC ---");
        for (let i = 0; i < libraries.length; i++) {
          console.log("Index " + i + ": " + libraries[i]);
        }
        break;

      case 6:
        let branchBooks = ["Sách Kỹ Năng", "Truyện Tranh"];
        libraries = libraries.concat(branchBooks);
        console.log("=> Đã gộp kho sách thành công.");
        break;

      case 7:
        console.log("Hẹn gặp lại!");
        break;

      default:
        console.log("Lựa chọn không hợp lệ!");
        break;
    }
  }
} else {
  alert("Tài khoản đã bị khóa do nhập sai quá 3 lần!");
}
