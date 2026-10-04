const productsData = [
    {
        id: 1,
        title: "Ноутбук Apple MacBook Air 13.6\" M5 16/1TB 2026 (MDHC4UA/A) Starlight",
        price: "98 499",
        oldPrice: "108 999",
        img: "https://content1.rozetka.com.ua/goods/images/big/655316590.jpg",
        badge: "АКЦІЯ"
    },
    {
        id: 2,
        title: "Монітор 27\" Samsung Odyssey G5",
        price: "10 999",
        oldPrice: "11 999",
        img: "https://content.rozetka.com.ua/goods/images/big/629962972.jpg",
        badge: "ТІЛЬКИ В ROZETKA"
    },
    {
        id: 3,
        title: "Мобільний телефон Apple iPhone 17 Pro Max 256GB Deep Blue",
        price: "67 999  ",
        oldPrice: "72 999",
        img: "https://content2.rozetka.com.ua/goods/images/big/594372256.jpg",
        badge: "ТОП ПРОДАЖІВ"
    },
    {
        id: 4,
        title: "Супутникова система старлінк, STARLINK Mini",
        price: "25 990",
        oldPrice: null,
        img: "https://content.rozetka.com.ua/goods/images/big/602414021.jpg",
        badge: "ТОП ПРОДАЖІВ"
    },
    {
        id: 5,
        title: "Миша Logitech G Pro X2 Superstrike",
        price: "8 999",
        oldPrice: null,
        img: "https://content.rozetka.com.ua/goods/images/big/675081971.png",
        badge: null
    }
];

const gridContainer = document.getElementById('products-grid');

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const badge = document.createElement('div');
    badge.classList.add('product-badge');
    if (product.badge) {
        badge.textContent = product.badge;
    } else {
        badge.classList.add('badge-hidden');
    }

    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.title;
    img.classList.add('product-img');

    const title = document.createElement('h4');
    title.classList.add('product-title');
    title.textContent = product.title;

    const oldPrice = document.createElement('div');
    oldPrice.classList.add('product-old-price');
    if (product.oldPrice) {
        oldPrice.textContent = `${product.oldPrice} ₴`;
    }

    const priceRow = document.createElement('div');
    priceRow.classList.add('price-row');

    const price = document.createElement('div');
    price.classList.add('product-price');
    price.textContent = `${product.price} ₴`;

    const buyBtn = document.createElement('button');
    buyBtn.classList.add('buy-btn');
    buyBtn.textContent = '🛒';

    priceRow.appendChild(price);
    priceRow.appendChild(buyBtn);

    card.appendChild(badge);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(oldPrice);
    card.appendChild(priceRow);

    return card;
}

productsData.forEach(product => {
    const cardElement = createProductCard(product);
    gridContainer.appendChild(cardElement);
});