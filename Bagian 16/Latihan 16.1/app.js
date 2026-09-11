const numbers = Array.from({ length: 10000 }, (_, i) => i + 1);

function linearSearch(array, target) {
    let checks = 0;

    for (let i = 0; i < array.length; i++) {
        checks++;

        if (array[i] === target) {
            return {
                index: i,
                checks: checks
            };
        }
    }

    return {
        index: -1,
        checks: checks
    };
}

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    let checks = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        checks++;

        if (array[mid] === target) {
            return {
                index: mid,
                checks: checks
            };
        }

        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return {
        index: -1,
        checks: checks
    };
}

const target = 10000;

console.log("Linear Search:");
console.log(linearSearch(numbers, target));

console.log("Binary Search:");
console.log(binarySearch(numbers, target));