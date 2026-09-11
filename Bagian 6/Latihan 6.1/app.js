const numbers = [10, 25, 7, 42, 15];

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch(numbers, 42));
console.log(linearSearch(numbers, 100));