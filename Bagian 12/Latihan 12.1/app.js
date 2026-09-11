const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones"
    },
    {
        id: 3,
        title: "Keyboard",
        price: 50,
        category: "electronics"
    },
    {
        id: 4,
        title: "Monitor",
        price: 300,
        category: "electronics"
    }
];

function buildProductLookup(products) {
    const productMap = new Map();

    for (const product of products) {
        productMap.set(product.id, product);
    }

    return productMap;
}

const productMap = buildProductLookup(products);

console.log("Product Map:");
console.log(productMap);

console.log("Produk dengan ID 2:");
console.log(productMap.get(2));

console.log("Produk dengan ID 10:");
console.log(productMap.get(10));