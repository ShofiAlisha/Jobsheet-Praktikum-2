function bubbleSort(numbers) {
    const arr = [...numbers];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

const numbers = [5, 3, 8, 1, 4];

console.log("Array awal:");
console.log(numbers);

console.log("Hasil Bubble Sort:");
console.log(bubbleSort(numbers));

console.log("Array setelah proses:");
console.log(numbers);