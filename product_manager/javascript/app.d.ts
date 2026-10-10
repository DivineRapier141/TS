interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
declare let products: Product[];
declare const form: HTMLFormElement;
declare const idInput: HTMLInputElement;
declare const nameInput: HTMLInputElement;
declare const priceInput: HTMLInputElement;
declare const quantityInput: HTMLInputElement;
declare const saveBtn: HTMLButtonElement;
declare const cancelBtn: HTMLButtonElement;
declare const list: HTMLDivElement;
declare function saveProducts(): void;
declare function renderProducts(): void;
declare function addProduct(name: string, price: number, quantity: number): void;
declare function updateProduct(id: number, name: string, price: number, quantity: number): void;
declare function deleteProduct(id: number): void;
declare function editProduct(id: number): void;
declare function resetForm(): void;
//# sourceMappingURL=app.d.ts.map