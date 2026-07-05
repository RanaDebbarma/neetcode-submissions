class MinStack {
    stack: number[];
    minstack: number[];

    constructor() {
        this.stack = [];
        this.minstack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(value: number): void {
        this.stack.push(value);

        if (this.minstack.length === 0) {
            this.minstack.push(value);
        } else {
            const prevMin = this.minstack[this.minstack.length - 1];
            const newMin = value < prevMin ? value : prevMin;
            this.minstack.push(newMin);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minstack.pop();
    }

    /**
     * @return {number}
     */
    top(): number | undefined {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number | undefined {
        return this.minstack[this.minstack.length - 1];
    }
}
