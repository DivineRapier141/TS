function calculateTotal() {
    const selectedItems = document.querySelectorAll('.menu-item:checked');
    let summary = 0;
        selectedItems.forEach(item => {
        summary += Number(item.getAttribute('price')); 
    });

    document.getElementById('total-price').innerText = summary;
}

function clearMenu() {
    const allItems = document.querySelectorAll('.menu-item');

    allItems.forEach(item => {
        item.checked = false;
    });

    document.getElementById('total-price').innerText = 0;
}