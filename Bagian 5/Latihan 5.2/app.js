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

function getStatistics(products) {
    const totalProducts = products.length;

    const totalPrice = products.reduce(
        (sum, product) => sum + product.price,
        0
    );

    const averagePrice = totalPrice / totalProducts;

    const highestPrice = Math.max(
        ...products.map(product => product.price)
    );

    const lowestPrice = Math.min(
        ...products.map(product => product.price)
    );

    const totalStock = products.reduce(
        (sum, product) => sum + product.stock,
        0
    );

    const totalRating = products.reduce(
        (sum, product) => sum + product.rating,
        0
    );

    const averageRating = totalRating / totalProducts;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}

console.log(getStatistics(products));