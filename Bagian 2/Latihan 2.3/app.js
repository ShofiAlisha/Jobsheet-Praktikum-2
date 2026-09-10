const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

function increasePrices(products, percentage) {
    return products.map(product => ({
        ...product,
        price: product.price + (product.price * percentage / 100)
    }));
}

const updatedProducts = increasePrices(products, 10);

console.log("Produk awal:");
console.log(products);

console.log("Produk setelah harga naik 10%:");
console.log(updatedProducts);