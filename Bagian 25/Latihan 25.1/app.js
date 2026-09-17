async function fetchProducts() {
    try {
        const response = await fetch(
            "https://dummyjson.com/products?limit=30"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return data.products;
    } catch (error) {
        console.error("Gagal mengambil data:", error);
        throw error;
    }
}


// ====================
// 25.1 STATISTICS
// ====================

function getStatistics(products) {
    const prices = products.map(product => product.price);
    const ratings = products.map(product => product.rating);
    const stocks = products.map(product => product.stock);

    const totalProducts = products.length;

    const averagePrice =
        prices.reduce((sum, price) => sum + price, 0) / totalProducts;

    const highestPrice = Math.max(...prices);
    const lowestPrice = Math.min(...prices);

    const totalStock =
        stocks.reduce((sum, stock) => sum + stock, 0);

    const averageRating =
        ratings.reduce((sum, rating) => sum + rating, 0) / totalProducts;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}


// ====================
// 25.2 CATEGORY ANALYTICS
// ====================

function getCategoryAnalytics(products) {
    const categories = {};

    for (const product of products) {
        const category = product.category;

        if (!categories[category]) {
            categories[category] = {
                count: 0,
                totalPrice: 0,
                totalRating: 0,
                totalStock: 0
            };
        }

        categories[category].count++;
        categories[category].totalPrice += product.price;
        categories[category].totalRating += product.rating;
        categories[category].totalStock += product.stock;
    }

    for (const category in categories) {
        const data = categories[category];

        data.averagePrice =
            data.totalPrice / data.count;

        data.averageRating =
            data.totalRating / data.count;

        delete data.totalPrice;
        delete data.totalRating;
    }

    return categories;
}


// ====================
// 25.3 PRODUCT SEARCH
// ====================

// Exact search
function exactSearch(products, keyword) {
    return products.filter(
        product => product.title === keyword
    );
}


// Partial search
function partialSearch(products, keyword) {
    const lower = keyword.toLowerCase();

    return products.filter(
        product => product.title.toLowerCase().includes(lower)
    );
}


// Case-insensitive search
function caseInsensitiveSearch(products, keyword) {
    const lower = keyword.toLowerCase();

    return products.filter(
        product => product.title.toLowerCase() === lower
    );
}


// ====================
// MAIN PROGRAM
// ====================

async function main() {
    try {
        const products = await fetchProducts();

        // 25.1
        console.log("=== STATISTICS ===");
        console.log(getStatistics(products));

        // 25.2
        console.log("\n=== CATEGORY ANALYTICS ===");
        console.log(getCategoryAnalytics(products));

        // 25.3
        console.log("\n=== EXACT SEARCH ===");
        console.log(exactSearch(products, "Essence Mascara Lash Princess"));

        console.log("\n=== PARTIAL SEARCH ===");
        console.log(partialSearch(products, "mascara"));

        console.log("\n=== CASE-INSENSITIVE SEARCH ===");
        console.log(caseInsensitiveSearch(products, "essence mascara lash princess"));

    } catch (error) {
        console.error("Program gagal dijalankan:", error);
    }
}

main();