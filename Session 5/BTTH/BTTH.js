let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choice;
while (choice !== 0) {
  let menu =
    "=== QUẢN LÝ THƯ VIỆN 4.0 ===\n" +
    "1. Xem danh sách (join)\n" +
    "2. Thêm sách (push)\n" +
    "3. Mượn sách (indexOf + splice)\n" +
    "4. Cập nhật tên sách\n" +
    "5. Sắp xếp kệ (sort)\n" +
    "0. Thoát\n" +
    "Nhập lựa chọn của bạn:";
  choice = Number(prompt(menu));
  switch (choice) {
    case 1:
      console.log("=> Danh sách hiện tại (" + books.length + " cuốn):");
      if (books.length > 0) {
        console.log(books.join(" - "));
      } else {
        console.log("Kho sách trống.");
      }
      break;

    case 2:
      let newBook = prompt("Nhập tên cuốn sách mới:");
      if (newBook) {
        books.push(newBook);
        console.log("=> Đã thêm thành công!");
      }
      break;

    case 3:
      let borrowName = prompt("Nhập tên sách muốn mượn:");

      let borrowIndex = books.indexOf(borrowName);

      if (borrowIndex !== -1) {
        books.splice(borrowIndex, 1);
        console.log("=> Đã cho mượn cuốn '" + borrowName + "'.");
      } else {
        console.log("=> Lỗi: Không tìm thấy sách!");
      }
      break;

    case 4:
      let oldName = prompt("Nhập tên sách cũ cần sửa:");
      let updateIndex = books.indexOf(oldName);

      if (updateIndex !== -1) {
        let updateName = prompt("Nhập tên mới:");
        books[updateIndex] = updateName;
        console.log("=> Cập nhật thành công!");
      } else {
        console.log("=> Không tìm thấy sách để sửa.");
      }
      break;

    case 5:
      books.sort();
      console.log("=> Kệ sách đã được sắp xếp A-Z.");
      console.log(books.join(" | "));
      break;

    case 0:
      console.log("Hẹn gặp lại!");
      break;

    default:
      console.log("Lựa chọn không hợp lệ!");
      break;
  }
}
