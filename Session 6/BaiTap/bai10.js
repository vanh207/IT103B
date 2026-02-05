let arr = [];
let choice;

while (choice !== 0) {
  let menu =
    "================== MENU ===================\n" +
    "1. Nhập số phần tử và giá trị các phần tử\n" +
    "2. In ra giá trị các phần tử đang quản lý\n" +
    "3. In số chẵn, tính tổng và sắp xếp giảm dần\n" +
    "4. In Max, Min và vị trí của chúng\n" +
    "5. In các số nguyên tố và tính tổng\n" +
    "6. Nhập một số và đếm số lần xuất hiện\n" +
    "7. Thêm một phần tử vào vị trí chỉ định\n" +
    "8. Xóa một phần tử theo giá trị\n" +
    "9. Sắp xếp mảng (Tăng/Giảm)\n" +
    "0. Thoát\n" +
    "===========================================\n" +
    "Lựa chọn của bạn:";

  choice = Number(prompt(menu));

  switch (choice) {
    case 1:
      let n = Number(prompt("Nhập số lượng phần tử:"));
      arr = [];
      if (n > 0) {
        for (let i = 0; i < n; i++) {
          arr.push(Number(prompt("Nhập phần tử thứ " + (i + 1) + ":")));
        }
      }
      break;

    case 2:
      console.log("Mảng hiện tại: [" + arr.join(", ") + "]");
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

      evens.sort(function (a, b) {
        return b - a;
      });
      console.log("Các số chẵn (giảm dần): " + evens.join(", "));
      console.log("Tổng các số chẵn: " + sumEven);
      break;

    case 4:
      if (arr.length === 0) {
        console.log("Mảng trống!");
      } else {
        let max = arr[0],
          min = arr[0];
        let maxPos = [0],
          minPos = [0];

        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
            maxPos = [i];
          } else if (arr[i] === max) {
            maxPos.push(i);
          }

          if (arr[i] < min) {
            min = arr[i];
            minPos = [i];
          } else if (arr[i] === min) {
            minPos.push(i);
          }
        }
        console.log(
          "Giá trị lớn nhất: " + max + " (Vị trí: " + maxPos.join(", ") + ")",
        );
        console.log(
          "Giá trị nhỏ nhất: " + min + " (Vị trí: " + minPos.join(", ") + ")",
        );
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
      console.log("Tổng các số nguyên tố: " + sumPrime);
      break;

    case 6:
      let target = Number(prompt("Nhập số cần đếm:"));
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) count++;
      }
      console.log("Số " + target + " xuất hiện " + count + " lần.");
      break;

    case 7:
      let valAdd = Number(prompt("Nhập giá trị cần thêm:"));
      let posAdd = Number(
        prompt("Nhập vị trí cần thêm (0 đến " + arr.length + "):"),
      );
      if (posAdd >= 0 && posAdd <= arr.length) {
        arr.splice(posAdd, 0, valAdd);
        console.log("Đã thêm thành công.");
      } else {
        console.log("Vị trí không hợp lệ!");
      }
      break;

    case 8:
      let valDel = Number(prompt("Nhập giá trị cần xóa:"));
      let delIndex = arr.indexOf(valDel);
      if (delIndex !== -1) {
        arr.splice(delIndex, 1);
        console.log("Đã xóa giá trị " + valDel + " đầu tiên tìm thấy.");
      } else {
        console.log("Không tìm thấy giá trị này trong mảng.");
      }
      break;

    case 9:
      let sortType = prompt(
        "Nhập 'T' để tăng dần, 'G' để giảm dần:",
      ).toUpperCase();
      if (sortType === "T") {
        arr.sort(function (a, b) {
          return a - b;
        });
        console.log("Mảng đã sắp xếp tăng dần.");
      } else if (sortType === "G") {
        arr.sort(function (a, b) {
          return b - a;
        });
        console.log("Mảng đã sắp xếp giảm dần.");
      } else {
        console.log("Lựa chọn không hợp lệ!");
      }
      break;

    case 0:
      console.log("Chương trình kết thúc!");
      break;

    default:
      console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
  }
}
