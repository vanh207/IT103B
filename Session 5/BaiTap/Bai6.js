let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let quantity = Number(
  prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"),
);

if (!isNaN(quantity) && quantity > 0) {
  for (let i = 1; i <= quantity; i++) {
    let cardId, name, bookCodes, days;

    while (true) {
      cardId = prompt("Nhập mã thẻ bạn đọc thứ " + i + ":");
      if (!cardId) continue;

      let isDuplicate = false;

      if (readerCardIds.indexOf(cardId) !== -1) {
        isDuplicate = true;
      }

      if (!isDuplicate) break;
      alert("Mã thẻ này đã tồn tại, vui lòng nhập mã khác!");
    }

    do {
      name = prompt("Nhập tên bạn đọc thứ " + i + ":");
    } while (!name);

    do {
      bookCodes = prompt("Nhập danh sách mã sách (cách nhau bởi dấu phẩy):");
    } while (!bookCodes);

    do {
      days = Number(prompt("Nhập số ngày quá hạn:"));
    } while (isNaN(days) || days < 0);

    readerCardIds.push(cardId);
    readerNames.push(name);
    borrowedBookCodes.push(bookCodes);
    overdueDays.push(days);
  }

  let over10DaysCount = 0;
  for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 10) {
      over10DaysCount++;
    }
  }
  console.log("Tổng số bạn đọc có quá hạn ≥ 10 ngày: " + over10DaysCount);

  console.log("Mã thẻ bạn đọc mượn cả sách 'JS' và 'PYT':");
  for (let i = 0; i < borrowedBookCodes.length; i++) {
    let codes = borrowedBookCodes[i].toUpperCase();

    if (codes.indexOf("JS") !== -1 && codes.indexOf("PYT") !== -1) {
      console.log(readerCardIds[i]);
    }
  }

  let maxIndex = 0;
  for (let i = 1; i < overdueDays.length; i++) {
    if (overdueDays[i] > overdueDays[maxIndex]) {
      maxIndex = i;
    }
  }
  console.log("Bạn đọc có số ngày quá hạn cao nhất: " + readerNames[maxIndex]);

  let over7DaysCount = 0;
  for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 7) {
      over7DaysCount++;
    }
  }

  if (over7DaysCount === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
  } else if (over7DaysCount >= 1 && over7DaysCount <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
  } else {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
  }
} else {
  console.log("Số lượng nhập vào không hợp lệ.");
}
