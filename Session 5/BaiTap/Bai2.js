let lateBookList = [];
let quantity = Number(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));

if (!isNaN(quantity) && quantity > 0) {
  for (let i = 1; i <= quantity; i++) {
    let bookName = prompt("Nhập tên cuốn sách bị trả muộn thứ " + i + ":");
    lateBookList.push(bookName);
  }

  let totalLateBooks = 0;
  for (let i = 0; i < lateBookList.length; i++) {
    totalLateBooks++;
  }
  console.log("Tổng số sách bị trả muộn: " + totalLateBooks);

  console.log("Danh sách sách bị trả muộn:");
  let longNameCount = 0;
  for (let i = 0; i < lateBookList.length; i++) {
    console.log(i + 1 + ". " + lateBookList[i]);

    if (lateBookList[i].length > 20) {
      longNameCount++;
    }
  }

  console.log("Số lượng sách có tên dài hơn 20 ký tự: " + longNameCount);
} else {
  console.log("Số lượng không hợp lệ.");
}
