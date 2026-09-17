import { formatPrice } from "./utils.js";

export function renderStatus(status) {
    const statusContainer = document.querySelector("#status");

    if (status === "loading") {
        statusContainer.innerHTML =
            "<p>Loading products...</p>";
    } else if (status === "error") {
        statusContainer.innerHTML =
            "<p class='error'>Gagal mengambil data produk.</p>";
    } else {
        statusContainer.innerHTML = "";
    }
}

export function renderCategories(categories) {
    const select = document.querySelector("#category-select");

    select.innerHTML = `
        <option value="all">All Categories</option>
    `;

    for (const category of categories) {
        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        select.append(option);
    }
}

export function renderStatistics(statistics) {
    const container = document.querySelector("#statistics");

    container.innerHTML = `
        <h2>Statistics</h2>
        <p>Total Products: ${statistics.totalProducts}</p>
        <p>Average Price: ${formatPrice(statistics.averagePrice)}</p>
        <p>Total Stock: ${statistics.totalStock}</p>
        <p>Average Rating: ${statistics.averageRating.toFixed(2)}</p>
    `;
}

export function renderProducts(products) {
    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML =
            "<p>No products found.</p>";
        return;
    }

    for (const product of products) {
        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img
                src="${product.thumbnail}"
                alt="${product.title}"
            >

            <h3>${product.title}</h3>

            <p>Price: ${formatPrice(product.price)}</p>

            <p>Category: ${product.category}</p>

            <p>Rating: ${product.rating}</p>

            <p>Stock: ${product.stock}</p>
        `;

        container.append(card);
    }
}