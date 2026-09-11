class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const searchHistory = new Stack();

searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");

console.log("Search history:");
console.log(searchHistory.items);

console.log("Search terakhir:");
console.log(searchHistory.peek());

console.log("Undo search:");
console.log(searchHistory.pop());

console.log("Search history setelah undo:");
console.log(searchHistory.items);