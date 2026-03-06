let tasks = ["Quét nhà", "Giặt quần áo"];
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addButton = document.querySelector("button");
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}
function addTask() {
  const taskValue = taskInput.value.trim();
  if (!taskValue) {
    alert("Vui lòng nhập tên công việc!");
    return;
  }
  tasks.push(taskValue);
  renderTasks();
  taskInput.value = "";
}
addButton.addEventListener("click", addTask);
renderTasks();
