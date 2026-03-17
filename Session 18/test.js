let products = [
  { code: "SP001", name: "Laptop Dell XPS 15", price: 25000000 },
  { code: "SP002", name: "iPhone 15 Pro Max", price: 32900000 },
  { code: "SP003", name: "Samsung Galaxy S24 Ultra", price: 28900000 },
];
const productForm = document.getElementById("product-form");
const productTbody = document.getElementById("product-tbody");

const renderProducts = () => {
  productTbody.innerHTML = "";

  products.forEach((product, index) => {
    const row = document.createElement("tr");
    const formattedPrice =
      new Intl.NumberFormat("vi-VN").format(product.price) + " đ";

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.code}</td>
      <td>${product.name}</td>
      <td>${formattedPrice}</td>
      <td>
        <div class="action-buttons">
          <button class="btn-edit" onclick="editProduct('${product.code}')">Sửa</button>
          <button class="btn-delete" onclick="deleteProduct('${product.code}')">Xóa</button>
        </div>
      </td>
    `;
    productTbody.appendChild(row);
  });
};
productForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const code = document.getElementById("product-code").value.trim();
  const name = document.getElementById("product-name").value.trim();
  const price = parseFloat(document.getElementById("product-price").value);
  if (!code) {
    alert("Mã sản phẩm không được để trống!");
    return;
  }
  if (products.some((p) => p.code === code)) {
    alert("Mã sản phẩm đã tồn tại!");
    return;
  }

  if (!name) {
    alert("Tên sản phẩm không được để trống!");
    return;
  }
  if (name.length < 3) {
    alert("Tên sản phẩm phải có ít nhất 3 ký tự!");
    return;
  }

  if (isNaN(price)) {
    alert("Giá sản phẩm không được để trống!");
    return;
  }
  if (price < 1000) {
    alert("Giá sản phẩm phải là số dương và tối thiểu 1,000 đ!");
    return;
  }

  products.push({ code, name, price });

  alert("Thêm sản phẩm thành công!");
  productForm.reset();
  renderProducts();
});

renderProducts();
