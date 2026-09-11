const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2
    },
    {
        id: 3,
        title: "Keyboard",
        price: 50,
        rating: 4.7
    },
    {
        id: 4,
        title: "Monitor",
        price: 300,
        rating: 4.0
    }
];

function sortProducts(products, sortBy) {
    const sortedProducts = [...products];

    if (sortBy === "price-asc") {
        return sortedProducts.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-desc") {
        return sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
        return sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "title") {
        return sortedProducts.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    return sortedProducts;
}

console.log("Harga termurah:");
console.log(sortProducts(products, "price-asc"));

console.log("Harga termahal:");
console.log(sortProducts(products, "price-desc"));

console.log("Rating tertinggi:");
console.log(sortProducts(products, "rating"));

console.log("Judul A-Z:");
console.log(sortProducts(products, "title"));