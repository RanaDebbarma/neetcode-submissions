class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n - 1) return false;

        const graph: number[][] = Array.from({ length: n }, () => []);
        const visited = new Set<number>();

        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        const queue: number[] = [0];
        visited.add(0);
        let head = 0;

        while (head < queue.length) {
            const node = queue[head++];

            for (const neighbor of graph[node]) {
                if (visited.has(neighbor)) continue;

                visited.add(neighbor);
                queue.push(neighbor);
            }
        }

        return visited.size === n;
    }
}
