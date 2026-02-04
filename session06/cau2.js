let price = [100, 200, 300, 400];
let sum = 0;
for (const prices of price) {
  console.log("Giá trị của phần tử", prices);
}
for (const index in price) {
  console.log("vị trí của từng phần tử: ", index);
}
for (let index = 0; index < price.length; index += 2) {
  sum += price[index];
}
console.log("tổng các phần tử trong mảng có chỉ số index chẵn là: ", sum);
