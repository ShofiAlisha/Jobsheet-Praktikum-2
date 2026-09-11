const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        tags: ["computer", "electronics", "office"]
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",
        tags: ["mobile", "electronics"]
    }
];

const uniqueCategories = [
    ...new Set(products.map(product => product.category))
];

const uniqueTags = [
    ...new Set(products.flatMap(product => product.tags))
];

console.log("Unique categories:");
console.log(uniqueCategories);

console.log("Unique tags:");
console.log(uniqueTags);