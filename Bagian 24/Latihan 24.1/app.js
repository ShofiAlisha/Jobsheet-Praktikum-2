const state = {
    products: [],
    status: "idle"
};

function render() {
    const statusContainer = document.querySelector("#status");
    const productContainer = document.querySelector("#product-list");

    statusContainer.innerHTML = "";
    productContainer.innerHTML = "";

    if (state.status === "loading") {
        statusContainer.innerHTML = "<p>Loading products...</p>";
        return;
    }

    if (state.status === "error") {
        statusContainer.innerHTML =
            "<p>Gagal mengambil data produk.</p>";
        return;
    }

    for (const product of state.products) {
        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Kategori: ${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <hr>
        `;

        productContainer.append(card);
    }
}

async function fetchProducts() {
    try {
        const response = await fetch(
            "https://dummyjson.com/products?limit=30"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return data.products;

    } catch (error) {
        console.error("Gagal mengambil data:", error);
        throw error;
    }
}

async function loadProducts() {
    state.status = "loading";
    render();

    try {
        const products = await fetchProducts();

        state.products = products;
        state.status = "success";

    } catch (error) {
        state.status = "error";
    }

    render();
}

loadProducts();