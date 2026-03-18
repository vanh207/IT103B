let contacts = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    phone: "0901234567",
    email: "nguyenvanan@email.com",
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    phone: "0912345678",
    email: "tranthibinh@email.com",
  },
  {
    id: 3,
    name: "Lê Văn Cường",
    phone: "0923456789",
    email: "levancuong@email.com",
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    phone: "0934567890",
    email: "phamthidung@email.com",
  },
  {
    id: 5,
    name: "Hoàng Văn Em",
    phone: "0945678901",
    email: "hoangvanem@email.com",
  },
];

let isEditing = false;
let currentEditId = null;

const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("contact-name");
const phoneInput = document.getElementById("contact-phone");
const emailInput = document.getElementById("contact-email");
const submitBtn = contactForm.querySelector(".btn-add");
const tbody = document.getElementById("contact-tbody");

const renderContacts = () => {
  tbody.innerHTML = "";
  contacts.forEach((contact, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${contact.name}</td>
      <td>${contact.phone}</td>
      <td>${contact.email}</td>
      <td>
        <div class="action-buttons">
          <button class="btn-edit" onclick="editContact(${contact.id})">Sửa</button>
          <button class="btn-delete" onclick="deleteContact(${contact.id})">Xóa</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
};

contactForm.addEventListener("submit", (element) => {
  element.preventDefault();

  if (!isEditing) {
    return;
  }

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();

  if (name.length < 3) {
    alert("Tên sản phẩm phải có ít nhất 3 ký tự!");
    return;
  }

  const index = contacts.findIndex((element) => element.id === currentEditId);
  if (index !== -1) {
    contacts[index] = { ...contacts[index], name, phone, email };
    alert("Cập nhật sản phẩm thành công!");
    resetForm();
    renderContacts();
  }
});

window.editContact = (id) => {
  const contact = contacts.find((element) => element.id === id);
  if (contact) {
    nameInput.value = contact.name;
    phoneInput.value = contact.phone;
    emailInput.value = contact.email;

    isEditing = true;
    currentEditId = id;
    submitBtn.textContent = "Cập nhật";
    nameInput.focus();
  }
};

window.deleteContact = (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
    contacts = contacts.filter((element) => element.id !== id);
    renderContacts();
    alert("Xóa sản phẩm thành công!");
    if (currentEditId === id) resetForm();
  }
};

const resetForm = () => {
  isEditing = false;
  currentEditId = null;
  submitBtn.textContent = "Thêm";
  contactForm.reset();
};

renderContacts();
