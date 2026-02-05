let arr = [];
let choice;

while (choice !== 8) {
  let menu =
    "================== MENU ===================\n" +
    "1. Nhập số phần tử và giá trị mảng\n" +
    "2. In ra giá trị các phần tử đang quản lý\n" +
    "3. In các phần tử chẵn và tính tổng\n" +
    "4. In giá trị lớn nhất và nhỏ nhất\n" +
    "5. In các số nguyên tố và tính tổng\n" +
    "6. Thống kê số lượng một phần tử\n" +
    "7. Thêm phần tử vào vị trí chỉ định\n" +
    "8. Thoát\n" +
    "===========================================\n" +
    "Lựa chọn của bạn:";

  choice = Number(prompt(menu));

  switch (choice) {
    case 1:
      let n = Number(prompt("Nhập số lượng phần tử:"));
      arr = []; // Reset mảng cũ
      if (n > 0) {
        for (let i = 0; i < n; i++) {
          arr.push(Number(prompt("Nhập phần tử thứ " + (i + 1) + ":")));
        }
      }
      break;

    case 2:
      console.log("Mảng hiện tại: " + arr.join(", "));
      break;

    case 3:
      let evens = [];
      let sumEven = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          evens.push(arr[i]);
          sumEven += arr[i];
        }
      }
      console.log("Các số chẵn: " + evens.join(", "));
      console.log("Tổng các số chẵn: " + sumEven);
      break;

    case 4:
      if (arr.length === 0) {
        console.log("Mảng trống!");
      } else {
        let max = arr[0];
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) max = arr[i];
          if (arr[i] < min) min = arr[i];
        }
        console.log("Giá trị lớn nhất: " + max);
        console.log("Giá trị nhỏ nhất: " + min);
      }
      break;

    case 5:
      let primes = [];
      let sumPrime = 0;
      for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] < 2) isPrime = false;
        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
          if (arr[i] % j === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          primes.push(arr[i]);
          sumPrime += arr[i];
        }
      }
      console.log("Các số nguyên tố: " + primes.join(", "));
      console.log("Tổng số nguyên tố: " + sumPrime);
      break;

    case 6:
      let target = Number(prompt("Nhập số cần thống kê:"));
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) count++;
      }
      console.log("Số " + target + " xuất hiện " + count + " lần trong mảng.");
      break;

    case 7:
      let newValue = Number(prompt("Nhập giá trị cần thêm:"));
      let index = Number(
        prompt("Nhập vị trí cần thêm (từ 0 đến " + arr.length + "):"),
      );
      // Sử dụng splice() có trong ảnh của bạn để chèn phần tử
      if (index >= 0 && index <= arr.length) {
        arr.splice(index, 0, newValue);
        console.log("Đã thêm thành công.");
      } else {
        console.log("Vị trí không hợp lệ!");
      }
      break;

    case 8:
      console.log("Tạm biệt!");
      break;

    default:
      console.log("Lựa chọn không hợp lệ!");
  }
}
