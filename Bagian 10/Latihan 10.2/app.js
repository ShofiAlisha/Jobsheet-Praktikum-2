function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}

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

const categoryFrequency = countFrequency(
    products.map(product => product.category)
);

const tagFrequency = countFrequency(
    products.flatMap(product => product.tags)
);

const ratingFrequency = countFrequency(
    products.map(product => Math.round(product.rating))
);

console.log("Frekuensi category:");
console.log(categoryFrequency);

console.log("Frekuensi tags:");
console.log(tagFrequency);

console.log("Frekuensi rating:");
console.log(ratingFrequency);