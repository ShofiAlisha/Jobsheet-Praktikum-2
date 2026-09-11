const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones"
    }
];

const laptopPrices = products
    .filter(product => product.category === "laptops")
    .map(product => product.price);

const averagePrice =
    laptopPrices.reduce((total, price) => total + price, 0)
    / laptopPrices.length;

console.log("Harga produk kategori laptops:");
console.log(laptopPrices);

console.log("Rata-rata harga laptops:");
console.log(averagePrice);