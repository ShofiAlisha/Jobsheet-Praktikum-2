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
    }
];

function findProductById(products, targetId) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === targetId) {
            return i;
        }
    }

    return -1;
}

console.log(findProductById(products, 2));
console.log(findProductById(products, 10));