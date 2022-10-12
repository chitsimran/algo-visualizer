class Queue {
    #queue;

    constructor() {
        this.#queue = [];
    }

    push(val) {
        this.#queue.push(val);
    }

    pop() {
        return this.#queue.shift();
    }

    peek() {
        return this.#queue.length ? this.#queue[0] : undefined;
    }

    size() {
        return this.#queue.length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

export default Queue;
