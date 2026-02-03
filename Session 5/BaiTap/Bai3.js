let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let quantityCheck = Number(
  prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"),
);

if (!isNaN(quantityCheck) && quantityCheck > 0) {
  for (let i = 1; i <= quantityCheck; i++) {
    let id, name, stock;

    do {
      id = prompt("Nhập mã sách thứ " + i + ":");
    } while (!id);

    do {
      name = prompt("Nhập tên sách thứ " + i + ":");
    } while (!name);

    do {
      stock = Number(prompt("Nhập số lượng tồn kho của " + name + ":"));
    } while (isNaN(stock) || stock < 0);

    booksId.push(id);
    booksName.push(name);
    inventoryQuantity.push(stock);
  }

  console.log("Tổng số loại sách đang kiểm tra: " + booksId.length);

  let lowStockCount = 0;
  for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] <= 5) {
      lowStockCount++;
    }
  }
  console.log("Số lượng sách có tồn kho ≤ 5 bản: " + lowStockCount);

  let outOfStockIds = "";
  for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] === 0) {
      outOfStockIds += booksId[i] + " ";
    }
  }
  console.log("Các mã sách đã hết hàng: " + (outOfStockIds || "Không có"));

  console.log("Danh sách chi tiết:");
  for (let i = 0; i < booksId.length; i++) {
    console.log(
      i +
        1 +
        ". Mã: " +
        booksId[i] +
        " - Tên: " +
        booksName[i] +
        " - Tồn: " +
        inventoryQuantity[i],
    );
  }
} else {
  console.log("Số lượng không hợp lệ.");
}
