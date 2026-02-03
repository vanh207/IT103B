let booksId = [];
let booksName = [];
let bookStatus = [];

let quantity = Number(
  prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"),
);

if (!isNaN(quantity) && quantity > 0) {
  for (let i = 1; i <= quantity; i++) {
    let id, name, statusNum, statusStr;

    do {
      id = prompt("Nhập mã sách thứ " + i + ":");
    } while (!id);
    do {
      name = prompt("Nhập tên sách thứ " + i + ":");
    } while (!name);

    do {
      statusNum = prompt(
        "Nhập tình trạng (1: Hỏng nhẹ, 2: Hỏng nặng, 3: Cần sửa gấp):",
      );
    } while (statusNum !== "1" && statusNum !== "2" && statusNum !== "3");

    if (statusNum === "1") statusStr = "Hỏng nhẹ";
    else if (statusNum === "2") statusStr = "Hỏng nặng";
    else statusStr = "Cần sửa gấp";

    booksId.push(id);
    booksName.push(name);
    bookStatus.push(statusStr);
  }

  let action;
  do {
    console.log("--- DANH SÁCH HIỆN TẠI ---");
    for (let i = 0; i < booksId.length; i++) {
      console.log(
        i +
          1 +
          ". Mã: " +
          booksId[i] +
          " - Tên: " +
          booksName[i] +
          " - Tình trạng: " +
          bookStatus[i],
      );
    }

    action = prompt(
      "Chọn thao tác (1: Sửa tình trạng, 2: Xóa sách, 0: Thoát & In báo cáo):",
    );

    if (action === "1") {
      let searchId = prompt("Nhập mã sách cần sửa:");
      let foundIndex = -1;
      for (let i = 0; i < booksId.length; i++) {
        if (booksId[i] === searchId) {
          foundIndex = i;
          break;
        }
      }

      if (foundIndex !== -1) {
        let newStatusNum = prompt(
          "Chọn tình trạng mới (1: Hỏng nhẹ, 2: Hỏng nặng, 3: Cần sửa gấp, 4: Đã sửa xong, 5: Loại bỏ):",
        );
        let newStatusStr = "";
        if (newStatusNum === "1") newStatusStr = "Hỏng nhẹ";
        else if (newStatusNum === "2") newStatusStr = "Hỏng nặng";
        else if (newStatusNum === "3") newStatusStr = "Cần sửa gấp";
        else if (newStatusNum === "4") newStatusStr = "Đã sửa xong";
        else if (newStatusNum === "5") newStatusStr = "Loại bỏ";

        if (newStatusStr !== "") bookStatus[foundIndex] = newStatusStr;
      } else {
        alert("Không tìm thấy mã sách này!");
      }
    } else if (action === "2") {
      let deleteId = prompt("Nhập mã sách cần xóa:");
      let deleteIndex = -1;
      for (let i = 0; i < booksId.length; i++) {
        if (booksId[i] === deleteId) {
          deleteIndex = i;
          break;
        }
      }

      if (deleteIndex !== -1) {
        booksId.splice(deleteIndex, 1);
        booksName.splice(deleteIndex, 1);
        bookStatus.splice(deleteIndex, 1);
        alert("Đã xóa sách khỏi danh sách.");
      } else {
        alert("Không tìm thấy mã sách này!");
      }
    }
  } while (action !== "0");

  let repairedCount = 0;
  let removedCount = 0;
  for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") repairedCount++;
    if (bookStatus[i] === "Loại bỏ") removedCount++;
  }

  console.log("--- BÁO CÁO CUỐI CÙNG ---");
  console.log("Tổng số sách còn lại trong danh sách: " + booksId.length);
  console.log("Số sách đã sửa xong: " + repairedCount);
  console.log("Số sách loại bỏ: " + removedCount);
  console.log("Danh sách sách còn lại:");
  for (let i = 0; i < booksId.length; i++) {
    console.log(
      "- " + booksId[i] + ": " + booksName[i] + " (" + bookStatus[i] + ")",
    );
  }
} else {
  console.log("Số lượng nhập vào không hợp lệ.");
}
