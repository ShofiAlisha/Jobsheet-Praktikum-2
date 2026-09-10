const cart = [
    { title: "Laptop", price: 1000, discountPercent: 10 },
    { title: "Mouse", price: 200, discountPercent: 5 },
    { title: "Keyboard", price: 50, discountPercent: 0 }
];

function applyDiscounts(cart) {
    for (const product of cart) {
        const discountedPrice =
            product.price - (product.price * product.discountPercent / 100);

        console.log(
            product.title + " - Harga setelah diskon: " + discountedPrice
        );
    }
}

applyDiscounts(cart);