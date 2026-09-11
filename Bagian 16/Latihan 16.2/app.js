const products = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    category: `category-${(i % 10) + 1}`
}));

function findPairsNestedLoop(products) {
    let checks = 0;

    for (let i = 0; i < products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
            checks++;

            if (products[i].category === products[j].category) {
            }
        }
    }

    return checks;
}

function groupByCategory(products) {
    const groups = new Map();
    let checks = 0;

    for (const product of products) {
        checks++;

        if (!groups.has(product.category)) {
            groups.set(product.category, []);
        }

        groups.get(product.category).push(product);
    }

    return {
        groups: groups,
        checks: checks
    };
}

const nestedChecks = findPairsNestedLoop(products);
const mapResult = groupByCategory(products);

console.log("Nested Loop:");
console.log("Jumlah pemeriksaan:", nestedChecks);

console.log("Grouping dengan Map:");
console.log("Jumlah pemeriksaan:", mapResult.checks);

console.log("Jumlah kategori:", mapResult.groups.size);