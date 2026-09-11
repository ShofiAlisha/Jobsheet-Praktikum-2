function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}

const words = [
    "laptop",
    "phone",
    "laptop",
    "tablet",
    "phone",
    "laptop"
];

console.log("Frekuensi kata:");
console.log(countFrequency(words));