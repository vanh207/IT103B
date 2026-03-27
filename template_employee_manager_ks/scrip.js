let employees = JSON.parse(localStorage.getItem("employees")) || [
  {
    id: 1,
    name: "Nguyễn Văn An",
    dob: "1990-05-12",
    email: "an.nguyen@company.vn",
    address: "12 Lý Thường Kiệt, Hà Nội",
  },
  {
    id: 2,
    name: "Trần Thị Bích",
    dob: "1995-08-23",
    email: "bich.tran@company.vn",
    address: "45 Nguyễn Huệ, TP. HCM",
  },
];

let editId = null;
let currentPage = 1;
let pageSize = 5;

const tableBody = document.querySelector("#tableBody");
const btnSubmit = document.querySelector("#btnSubmit");
const btnReset = document.querySelector(".btn-secondary");
const inputName = document.querySelector("#inputName");
const inputDob = document.querySelector("#inputDob");
const inputEmail = document.querySelector("#inputEmail");
const inputAddress = document.querySelector("#inputAddress");
const searchInput = document.querySelector("#searchInput");
const pageSizeSelect = document.querySelector("#pageSizeSelect");
const formTitle = document.querySelector("#formTitle");

const saveToStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const formatDateDisplay = (dateStr) => {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
};

const renderEmployees = () => {
  let filteredData = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchInput.value.toLowerCase()),
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  if (currentPage > totalPages) currentPage = totalPages || 1;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pagedData = filteredData.slice(startIndex, endIndex);

  if (totalItems === 0) {
    tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center">Không tìm thấy nhân viên phù hợp.</td></tr>`;
  } else {
    tableBody.innerHTML = pagedData
      .map(
        (emp, index) => `
      <tr>
        <td>${startIndex + index + 1}</td>
        <td>${emp.name}</td>
        <td>${formatDateDisplay(emp.dob)}</td>
        <td>${emp.email}</td>
        <td>${emp.address}</td>
        <td>
          <div class="td-actions">
            <button class="btn btn-sm btn-edit" onclick="handleEdit(${emp.id})">✏ Sửa</button>
            <button class="btn btn-sm btn-delete" onclick="handleDelete(${emp.id})">✕ Xóa</button>
          </div>
        </td>
      </tr>
    `,
      )
      .join("");
  }

  document.querySelector("#totalBadge").textContent =
    `${employees.length} nhân viên`;
  document.querySelector("#listCount").textContent = `${totalItems} kết quả`;
  document.querySelector("#pageInfo").innerHTML =
    `Hiển thị <strong>${totalItems ? startIndex + 1 : 0}–${Math.min(endIndex, totalItems)}</strong> trong tổng số <strong>${totalItems}</strong>`;
  renderPaginationButtons(totalPages);
};

const renderPaginationButtons = (totalPages) => {
  let html = `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>&lt;</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
  }
  html += `<button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages || totalPages === 0 ? "disabled" : ""}>&gt;</button>`;
  document.querySelector("#pagination").innerHTML = html;
};

window.changePage = (pageNumber) => {
  currentPage = pageNumber;
  renderEmployees();
};

const handleFormSubmit = (e) => {
  if (events) events.preventDefault();

  const nameValue = inputName.value.trim();
  const dobValue = inputDob.value;
  const emailValue = inputEmail.value.trim();
  const addressValue = inputAddress.value.trim();
  if (!nameValue || !dobValue || !emailValue) {
    Swal.fire("Lỗi", "Vui lòng điền đầy đủ thông tin bắt buộc (*)", "error");
    return;
  }
  if (!validateEmail(emailValue)) {
    Swal.fire("Lỗi", "Email không đúng định dạng", "error");
    return;
  }
  const isDuplicate = employees.some(
    (emp) => emp.email === emailValue && emp.id !== editId,
  );
  if (isDuplicate) {
    Swal.fire("Lỗi", "Email đã tồn tại trên hệ thống", "error");
    return;
  }

  if (editId) {
    const index = employees.findIndex((emp) => emp.id === editId);
    employees[index] = {
      ...employees[index],
      name: nameValue,
      dob: dobValue,
      email: emailValue,
      address: addressValue,
    };
    Swal.fire("Thành công", "Cập nhật nhân viên thành công!", "success");
  } else {
    const newEmployee = {
      id: Date.now(),
      name: nameValue,
      dob: dobValue,
      email: emailValue,
      address: addressValue,
    };
    employees.push(newEmployee);
    currentPage = 1;
    Swal.fire("Thành công", "Thêm nhân viên thành công!", "success");
  }

  saveToStorage();
  resetFormState();
  renderEmployees();
};

const handleDelete = (id) => {
  const employee = employees.find((element) => element.id === id);
  Swal.fire({
    title: `Xóa nhân viên?`,
    text: `Bạn có chắc muốn xóa nhân viên [${employee.name}] không?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {
      employees = employees.filter((element) => element.id !== id);
      saveToStorage();
      renderEmployees();
      Swal.fire("Đã xóa", "Xóa nhân viên thành công!", "success");
    }
  });
};

const handleEdit = (id) => {
  const emp = employees.find((element) => element.id === id);
  if (!emp) return;

  editId = id;
  inputName.value = emp.name;
  inputDob.value = emp.dob;
  inputEmail.value = emp.email;
  inputAddress.value = emp.address;

  formTitle.textContent = "Cập nhật nhân viên";
  btnSubmit.textContent = "Lưu thay đổi";
  inputName.focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const resetFormState = () => {
  editId = null;
  inputName.value = "";
  inputDob.value = "";
  inputEmail.value = "";
  inputAddress.value = "";
  formTitle.textContent = "Thêm nhân viên mới";
  btnSubmit.textContent = "Thêm nhân viên";
};

btnSubmit.addEventListener("click", handleFormSubmit);
btnReset.addEventListener("click", resetFormState);

searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderEmployees();
});

sortSelect.addEventListener("change", renderEmployees);

pageSizeSelect.addEventListener("change", (element) => {
  pageSize = parseInt(element.target.value);
  currentPage = 1;
  renderEmployees();
});

renderEmployees();
