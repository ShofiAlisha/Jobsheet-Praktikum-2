import { formatPrice } from "./utils.js";

export function renderProducts(products) {
    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "<p>Produk tidak ditemukan.</p>";
        return;
    }

    for (const product of products) {
        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Kategori: ${product.category}</p>
            <p>Harga: ${formatPrice(product.price)}</p>
            <p>Rating: ${product.rating}</p>
            <hr>
        `;

        container.append(card);
    }
}