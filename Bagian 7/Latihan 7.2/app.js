const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800
    },
    {
        id: 3,
        title: "Keyboard",
        price: 50
    },
    {
        id: 4,
        title: "Monitor",
        price: 300
    }
];

const sortedProducts = [...products].sort((a, b) => a.price - b.price);

function binarySearchByPrice(sortedProducts, targetPrice) {
    let left = 0;
    let right = sortedProducts.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedProducts[mid].price === targetPrice) {
            return sortedProducts[mid];
        }

        if (sortedProducts[mid].price < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

console.log("Produk setelah diurutkan:");
console.log(sortedProducts);

console.log("Hasil pencarian:");
console.log(binarySearchByPrice(sortedProducts, 800));

console.log("Produk yang tidak ditemukan:");
console.log(binarySearchByPrice(sortedProducts, 500));