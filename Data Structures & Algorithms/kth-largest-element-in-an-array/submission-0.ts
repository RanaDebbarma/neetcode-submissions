class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const minHeap = new MinHeap<number>();

        for (const num of nums) {
            if (minHeap.size < k) {
                minHeap.enqueue(num);
            } else {
                const min = minHeap.peek()!;

                if (min < num) {
                    minHeap.replace(num);
                }
            }
        }

        return minHeap.dequeue()!;
    }
}

class MinHeap<T = number> {
    private h: T[];

    constructor() {
        this.h = [];
    }

    get size() {
        return this.h.length;
    }
    peek(): T | undefined {
        return this.h[0];
    }
    enqueue(val: T): void {
        this.h.push(val);
        this.bubbleUp(this.h.length - 1);
    }
    dequeue(): T | undefined {
        if (this.h.length === 0) return undefined;
        const top = this.h[0];
        const bot = this.h.pop()!;

        if (this.h.length) {
            this.h[0] = bot;
            this.bubbleDown(0);
        }
        return top;
    }
    replace(val: T): void {
        if (this.h.length === 0) {
            this.h.push(val);
            return;
        }
        this.h[0] = val;
        this.bubbleDown(0);
    }

    private swap(first: number, second: number): void {
        [this.h[first], this.h[second]] = [this.h[second], this.h[first]];
    }
    private bubbleUp(i: number): void {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.h[i] < this.h[p]) {
                this.swap(i, p);
                i = p;
            } else break;
        }
    }
    private bubbleDown(i: number): void {
        const n = this.h.length;
        while ((i << 1) + 1 < n) {
            let b = (i << 1) + 1;
            const r = b + 1;

            if (r < n && this.h[r] < this.h[b]) b = r;

            if (this.h[b] < this.h[i]) {
                this.swap(i, b);
                i = b;
            } else break;
        }
    }
}
