const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        }
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
    const prices = products.map(({ price }) => price);
    const ratings = products.map(({ rating }) => rating);
    const stocks = products.map(({ stock = 0 }) => stock);

    const totalProducts = products.length;

    const averagePrice =
        prices.reduce((sum, price) => sum + price, 0) / totalProducts;

    const highestPrice = Math.max(...prices);
    const lowestPrice = Math.min(...prices);

    const totalStock =
        stocks.reduce((sum, stock) => sum + stock, 0);

    const averageRating =
        ratings.reduce((sum, rating) => sum + rating, 0) / totalProducts;

    const { dimensions } = products[0];

    const width = dimensions?.width ?? "Tidak diketahui";

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating,
        firstProductWidth: width
    };
}

console.log(getStatistics(products));