class Heap<T = number> {
    private h: T[] = [];
    constructor(
        private c: (a: T, b: T) => number,
        init?: Iterable<T>,
    ) {
        if (init) {
            this.h = [...init];
            for (let i = (this.h.length >> 1) - 1; i >= 0; i--) {
                this.down(i);
            }
        }
    }
    push(v: T) {
        this.h.push(v);
        this.up(this.h.length - 1);
    }
    pop(): T | undefined {
        if (!this.h.length) return undefined;
        const top = this.h[0],
            bot = this.h.pop()!;
        if (this.h.length) {
            this.h[0] = bot;
            this.down(0);
        }
        return top;
    }
    peek(): T | undefined {
        return this.h[0];
    }
    size(): number {
        return this.h.length;
    }
    isEmpty(): boolean {
        return this.h.length === 0;
    }
    private up(i: number) {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.c(this.h[i], this.h[p]) < 0) {
                [this.h[i], this.h[p]] = [this.h[p], this.h[i]];
                i = p;
            } else break;
        }
    }
    private down(i: number) {
        const n = this.h.length;
        while ((i << 1) + 1 < n) {
            let b = (i << 1) + 1,
                r = b + 1;
            if (r < n && this.c(this.h[r], this.h[b]) < 0) b = r;
            if (this.c(this.h[b], this.h[i]) < 0) {
                [this.h[i], this.h[b]] = [this.h[b], this.h[i]];
                i = b;
            } else break;
        }
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    lastStoneWeight(stones: number[]): number {
        const maxHeap = new Heap((a, b) => b - a, stones);

        while (maxHeap.size() > 1) {
            const x = maxHeap.pop()!;
            const y = maxHeap.pop()!;

            if (x !== y) {
                maxHeap.push(x - y);
            }
        }

        return maxHeap.peek() ?? 0;
    }
}
