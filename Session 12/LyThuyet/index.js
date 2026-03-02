let student = [
  { id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam" },
  { id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ" },
  { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
  { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
  { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" },
];
const filterStudent = student
  .filter((element) => element.gender === "Nữ")
  .sort((a, b) => b.score - a.score);
const listStudent = student
  .filter((element) => element.score >= 5.0)
  .map((element) => element.name);

const males = student.filter((element) => element.gender === "Nam");
const average =
  males.reduce((acc, element) => acc + element.score, 0) / males.length;

console.log(filterStudent);
console.log(listStudent);
console.log(average.toFixed(1));
