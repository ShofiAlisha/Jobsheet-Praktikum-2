const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        category: "laptops"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        category: "phones"
    },
    {
        id: 3,
        title: "Keyboard",
        price: 50,
        rating: 4.0,
        category: "electronics"
    },
    {
        id: 4,
        title: "Monitor",
        price: 300,
        rating: 4.3,
        category: "electronics"
    },
    {
        id: 5,
        title: "Headphones",
        price: 100,
        rating: 4.6,
        category: "audio"
    }
];

const state = {
    products: products,
    search: "",
    category: "all",
    sortBy: "default"
};

function renderProducts(products) {
    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    for (const product of products) {
        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Kategori: ${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;

        container.append(card);
    }
}

function render() {
    let result = [...state.products];

    // Filter berdasarkan search
    if (state.search !== "") {
        result = result.filter(product =>
            product.title.toLowerCase().includes(state.search.toLowerCase())
        );
    }

    // Filter berdasarkan category
    if (state.category !== "all") {
        result = result.filter(product =>
            product.category === state.category
        );
    }

    // Sorting
    if (state.sortBy === "price-asc") {
        result.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "price-desc") {
        result.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(result);
}

// Event search
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
});

// Event category
const categorySelect = document.querySelector("#category-select");

categorySelect.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
});

// Event sorting
const sortSelect = document.querySelector("#sort-select");

sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render();
});

// Render awal
render();