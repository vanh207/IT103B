let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let quantity = Number(
  prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"),
);

if (!isNaN(quantity) && quantity > 0) {
  for (let i = 1; i <= quantity; i++) {
    let id, name, category, stock;

    while (true) {
      id = prompt("Nhập mã sách thứ " + i + ":");
      if (!id) continue;

      if (booksId.indexOf(id) !== -1) {
        alert("Mã sách đã tồn tại, vui lòng nhập mã khác!");
      } else {
        break;
      }
    }

    do {
      name = prompt("Nhập tên sách thứ " + i + ":");
    } while (!name);

    do {
      category = prompt("Nhập các thể loại (cách nhau bởi dấu phẩy):");
    } while (!category);

    do {
      stock = Number(prompt("Nhập số lượng tồn kho:"));
    } while (isNaN(stock) || stock < 0);

    booksId.push(id);
    booksName.push(name);
    booksCategory.push(category);
    inventoryQuantity.push(stock);
  }

  let programmingCount = 0;
  for (let i = 0; i < booksCategory.length; i++) {
    if (booksCategory[i].toLowerCase().indexOf("lập trình") !== -1) {
      programmingCount++;
    }
  }
  console.log("Tổng số sách thuộc thể loại 'Lập trình': " + programmingCount);

  console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");
  for (let i = 0; i < booksCategory.length; i++) {
    let catLower = booksCategory[i].toLowerCase();
    if (
      catLower.indexOf("javascript") !== -1 &&
      catLower.indexOf("web") !== -1
    ) {
      console.log(booksId[i]);
    }
  }

  let minIndex = 0;
  for (let i = 1; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
      minIndex = i;
    }
  }
  console.log("Loại sách có số lượng tồn kho thấp nhất:");
  console.log(
    "Mã sách: " +
      booksId[minIndex] +
      ", Tên sách: " +
      booksName[minIndex] +
      ", Tồn kho: " +
      inventoryQuantity[minIndex],
  );
} else {
  console.log("Số lượng nhập vào không hợp lệ.");
}
