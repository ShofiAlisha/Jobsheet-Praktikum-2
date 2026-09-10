const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

function getLowStockProducts(products, threshold) {
    return products.filter(product => product.stock < threshold);
}

const lowStockProducts = getLowStockProducts(products, 10);

console.log("Produk dengan stok menipis:");
console.log(lowStockProducts);