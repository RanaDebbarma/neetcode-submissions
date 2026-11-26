class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const graph: [number, number][][] = Array.from({ length: n + 1 }, () => []);

        for (const [from, to, weight] of times) {
            graph[from].push([to, weight]);
        }

        const minDelay = Array(n + 1).fill(Infinity);
        minDelay[k] = 0;

        const minHeap = new MinPriorityQueue((entry: number[]) => entry[1]);
        minHeap.enqueue([k, 0]);

        while (!minHeap.isEmpty()) {
            const [node, currTime] = minHeap.dequeue()!;

            if (currTime > minDelay[node]) continue;

            for (const [neighbor, weight] of graph[node]) {
                const arrivalTime = currTime + weight;

                if (arrivalTime < minDelay[neighbor]) {
                    minDelay[neighbor] = arrivalTime;
                    minHeap.enqueue([neighbor, arrivalTime]);
                }
            }
        }

        let maxDelay = 0;

        for (let i = 1; i <= n; i++) {
            if (minDelay[i] === Infinity) return -1;
            maxDelay = Math.max(maxDelay, minDelay[i]);
        }

        return maxDelay;
    }
}
