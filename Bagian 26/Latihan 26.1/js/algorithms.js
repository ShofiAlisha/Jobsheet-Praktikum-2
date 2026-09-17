export function searchProducts(products, keyword) {
    const lowerKeyword = keyword.toLowerCase();

    return products.filter(product =>
        product.title.toLowerCase().includes(lowerKeyword)
    );
}

export function filterByCategory(products, category = "all") {
    if (category === "all") {
        return products;
    }

    return products.filter(
        product => product.category === category
    );
}

export function sortProducts(products, sortBy) {
    const result = [...products];

    if (sortBy === "price-asc") {
        result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
        result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "title") {
        result.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    return result;
}

export function getStatistics(products) {
    if (products.length === 0) {
        return {
            totalProducts: 0,
            averagePrice: 0,
            totalStock: 0,
            averageRating: 0
        };
    }

    const prices = products.map(product => product.price);
    const ratings = products.map(product => product.rating);

    return {
        totalProducts: products.length,

        averagePrice:
            prices.reduce((sum, price) => sum + price, 0)
            / products.length,

        totalStock:
            products.reduce(
                (sum, product) => sum + product.stock,
                0
            ),

        averageRating:
            ratings.reduce(
                (sum, rating) => sum + rating,
                0
            ) / products.length
    };
}

export function getCategories(products) {
    return [...new Set(
        products.map(product => product.category)
    )];
}

export function buildProductMap(products) {
    const productMap = new Map();

    products.forEach(product => {
        productMap.set(product.id, product);
    });

    return productMap;
}

export function hasProducts(products) {
    return products.some(product => product.stock > 0);
}

export function allProductsValid(products) {
    return products.every(product =>
        product.title &&
        product.price >= 0
    );
}