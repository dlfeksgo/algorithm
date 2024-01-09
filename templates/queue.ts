class Queue<T> {
    queue: { [key: string]: T };
    private head: number;
    private tail: number;
    constructor() {
        this.queue = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element: T) {
        this.queue[this.tail] = element;
        this.tail += 1;
    }

    dequeue(): T {
        const item = this.queue[this.head];
        delete this.queue[this.head];
        this.head += 1;
        return item;
    }

    peek(): T {
        return this.queue[this.head];
    }

    isEmpty(): boolean {
        return this.head === this.tail;
    }

    size() {
        return this.tail - this.head;
    }
}

const queue = new Queue();
console.log(queue);
