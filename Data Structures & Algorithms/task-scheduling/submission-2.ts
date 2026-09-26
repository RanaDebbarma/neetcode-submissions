type Task = {
    freq: number;
    readyAt?: number;
};

class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */

    leastInterval(tasks: string[], n: number): number {
        const countArr = new Array<number>(26).fill(0);

        for (const task of tasks) {
            countArr[task.charCodeAt(0) - 65]++;
        }

        const taskHeap = new Heap<number>(
            (a, b) => b - a,
            countArr.filter((f) => f > 0),
        );

        const cooldownQueue: Task[] = [];
        let cooldownFront = 0;
        let time = 0;

        // cpu cycles
        while (taskHeap.size || cooldownFront < cooldownQueue.length) {
            time++;

            while (
                cooldownFront < cooldownQueue.length &&
                cooldownQueue[cooldownFront].readyAt === time
            ) {
                taskHeap.push(cooldownQueue[cooldownFront++].freq!);
            }

            if (taskHeap.size) {
                // complete task
                const freq = taskHeap.pop()! - 1;

                if (freq) {
                    cooldownQueue.push({
                        freq,
                        readyAt: time + n + 1,
                    });
                }
            }
        }

        return time;
    }
}

class Heap<T = number> {
    h: T[] = [];
    constructor(
        private c: (a: T, b: T) => number = (a: any, b: any) => a - b,
        init?: T[],
    ) {
        if (init) {
            this.h = [...init];
            for (let i = (this.h.length >> 1) - 1; i >= 0; i--) this.down(i);
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
    get size(): number {
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
