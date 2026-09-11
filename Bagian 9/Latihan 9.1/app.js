const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops" },
    { id: 2, title: "Smartphone", price: 800, category: "phones" },
    { id: 3, title: "Keyboard", price: 50, category: "electronics" },
    { id: 4, title: "Monitor", price: 300, category: "electronics" }
];

function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const key = product.category;

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(product);

        return groups;
    }, {});
}

const groupedProducts = groupByCategory(products);

console.log("Produk berdasarkan kategori:");
console.log(groupedProducts);