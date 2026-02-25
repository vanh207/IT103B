let order = [
  "Đơn hàng A",
  "Đơn hàng B",
  "Đơn hàng C",
  "Đơn hàng D",
  "Đơn hàng E",
];
let revenues = [1500, 2800, 1200, -500, 3200];
const newRevenue = revenues.every((element) => {
  return element < 0;
});
if (newRevenue) {
  console.log(`Có đơn hàng âm: ${newRevenue}`);
} else {
  console.log(`Tất cả trên 500: ${newRevenue}`);
}
const netProfits = revenues.map((revenue) => {
  return revenue * 0.9;
});
console.log(netProfits);
