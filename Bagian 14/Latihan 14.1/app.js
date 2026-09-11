class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}

const requestQueue = new Queue();

requestQueue.enqueue("Request 1");
requestQueue.enqueue("Request 2");
requestQueue.enqueue("Request 3");

console.log("Request queue:");
console.log(requestQueue.items);

console.log("Request pertama:");
console.log(requestQueue.peek());

console.log("Request yang diproses:");
console.log(requestQueue.dequeue());

console.log("Queue setelah request diproses:");
console.log(requestQueue.items);