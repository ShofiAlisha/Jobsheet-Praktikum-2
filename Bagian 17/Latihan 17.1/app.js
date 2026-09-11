const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        category: "laptops",
        thumbnail: "https://dummyjson.com/image/200x200"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        category: "phones",
        thumbnail: "https://dummyjson.com/image/200x200"
    },
    {
        id: 3,
        title: "Keyboard",
        price: 50,
        rating: 4.0,
        category: "electronics",
        thumbnail: "https://dummyjson.com/image/200x200"
    },
    {
        id: 4,
        title: "Monitor",
        price: 300,
        rating: 4.3,
        category: "electronics",
        thumbnail: "https://dummyjson.com/image/200x200"
    },
    {
        id: 5,
        title: "Headphones",
        price: 100,
        rating: 4.6,
        category: "audio",
        thumbnail: "https://dummyjson.com/image/200x200"
    }
];

function renderProducts(products) {
    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    for (const product of products) {
        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;

        container.append(card);
    }
}

renderProducts(products);