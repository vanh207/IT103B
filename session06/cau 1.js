let names = "Quý, Nam, Lan, Hùng, Nam";
let students = names.split(", ");
console.log("Mảng students ban đầu:", students);

let reversedStudents = students.reverse();
console.log("Mảng sau khi đảo ngược:", reversedStudents);

if (students.indexOf("Lan") !== -1) {
  console.log("Tên Lan tồn tại trong mảng");
} else {
  console.log("Tên Lan không tồn tại trong mảng");
}

let indexNam = students.indexOf("Nam");
console.log("Vị trí đầu tiên của tên 'Nam':", indexNam);
