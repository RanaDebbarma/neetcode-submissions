type Task = {
    task: string;
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
        const freqMap = new Map<string, number>();

        for (const task of tasks) {
            freqMap.set(task, (freqMap.get(task) ?? 0) + 1);
        }

        const taskHeap = new Heap<Task>((a, b) => b.freq - a.freq);

        for (const [task, freq] of freqMap) {
            taskHeap.push({ task, freq });
        }

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
                taskHeap.push(cooldownQueue[cooldownFront++]!);
            }

            if (taskHeap.size) {
                const task = taskHeap.pop()!;

                // complete task
                task.freq--;

                if (task.freq) {
                    task.readyAt = time + n + 1;
                    cooldownQueue.push(task);
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
