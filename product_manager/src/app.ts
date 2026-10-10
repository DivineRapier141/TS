interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

let products: Product[] = JSON.parse(localStorage.getItem("products") || "null");

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

const form = document.getElementById("productForm") as HTMLFormElement;
const idInput = document.getElementById("productId") as HTMLInputElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const priceInput = document.getElementById("price") as HTMLInputElement;
const quantityInput = document.getElementById("quantity") as HTMLInputElement;
const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement;
const cancelBtn = document.getElementById("cancelBtn") as HTMLButtonElement;
const list = document.getElementById("productList") as HTMLDivElement;

function saveProducts(): void {
  localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts(): void {
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

function addProduct(name: string, price: number, quantity: number): void {
  const newProduct: Product = {
    id: Date.now(),
    name: name,
    price: price,
    quantity: quantity,
  };
  products.push(newProduct);
}

function updateProduct(id: number, name: string, price: number, quantity: number): void {
  const product = products.find((p) => p.id === id);
  if (product) {
    product.name = name;
    product.price = price;
    product.quantity = quantity;
  }
}

function deleteProduct(id: number): void {
  if (!confirm("Видалити цей товар?")) return;
  products = products.filter((p) => p.id !== id);
  saveProducts();
  renderProducts();
}

function editProduct(id: number): void {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  idInput.value = String(product.id);
  nameInput.value = product.name;
  priceInput.value = String(product.price);
  quantityInput.value = String(product.quantity);

  saveBtn.textContent = "Зберегти";
  cancelBtn.hidden = false;
}

function resetForm(): void {
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
  } else {
    addProduct(name, price, quantity);
  }

  saveProducts();
  renderProducts();
  resetForm();
});

cancelBtn.addEventListener("click", resetForm);

(window as any).editProduct = editProduct;
(window as any).deleteProduct = deleteProduct;

renderProducts();