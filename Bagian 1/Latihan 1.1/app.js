function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

const result = calculateDiscountedPrice(1000, 10);

console.log("Harga setelah diskon:", result);