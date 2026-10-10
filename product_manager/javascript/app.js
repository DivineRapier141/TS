"use strict";
let products = JSON.parse(localStorage.getItem("products") || "null");
if (!products) {
    products = [
        { id: 1, name: "Ноутбук", price: 25000, quantity: 5 },
        { id: 2, name: "Смартфон", price: 12000, quantity: 10 },
        { id: 3, name: "Навушники", price: 1500, quantity: 25 },
        { id: 4, name: "Клавіатура", price: 900, quantity: 15 },
        { id: 5, name: "Мишка", price: 450, quantity: 30 },
        { id: 6, name: "Монітор", price: 7000, quantity: 7 },
    ];
}
const form = document.getElementById("productForm");
const idInput = document.getElementById("productId");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const list = document.getElementById("productList");
function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}
function renderProducts() {
    list.innerHTML = "";
    if (products.length === 0) {
        list.innerHTML = "<p>Товарів немає</p>";
        return;
    }
    for (const p of products) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <img class="card-image" src="images/no-image.png" alt="Немає зображення">
      <div class="card-body">
        <h3>${p.name}</h3>
        <div class="quantity">В наявності: ${p.quantity} шт.</div>
        <div class="price">${p.price.toFixed(2)} грн</div>
        <div class="card-buttons">
          <button class="btn-edit" onclick="editProduct(${p.id})">Редагувати</button>
          <button class="btn-delete" onclick="deleteProduct(${p.id})">Видалити</button>
        </div>
      </div>
    `;
        list.appendChild(card);
    }
}
function addProduct(name, price, quantity) {
    const newProduct = {
        id: Date.now(),
        name: name,
        price: price,
        quantity: quantity,
    };
    products.push(newProduct);
}
function updateProduct(id, name, price, quantity) {
    const product = products.find((p) => p.id === id);
    if (product) {
        product.name = name;
        product.price = price;
        product.quantity = quantity;
    }
}
function deleteProduct(id) {
    if (!confirm("Видалити цей товар?"))
        return;
    products = products.filter((p) => p.id !== id);
    saveProducts();
    renderProducts();
}
function editProduct(id) {
    const product = products.find((p) => p.id === id);
    if (!product)
        return;
    idInput.value = String(product.id);
    nameInput.value = product.name;
    priceInput.value = String(product.price);
    quantityInput.value = String(product.quantity);
    saveBtn.textContent = "Зберегти";
    cancelBtn.hidden = false;
}
function resetForm() {
    form.reset();
    idInput.value = "";
    saveBtn.textContent = "Додати";
    cancelBtn.hidden = true;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const price = Number(priceInput.value);
    const quantity = Number(quantityInput.value);
    if (idInput.value) {
        updateProduct(Number(idInput.value), name, price, quantity);
    }
    else {
        addProduct(name, price, quantity);
    }
    saveProducts();
    renderProducts();
    resetForm();
});
cancelBtn.addEventListener("click", resetForm);
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
renderProducts();
//# sourceMappingURL=app.js.map