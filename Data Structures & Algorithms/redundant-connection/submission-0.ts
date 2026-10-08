class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const n = edges.length;
        for (let i = n - 1; i >= 0; i--) {
            if (isConnected(i)) return edges[i];
        }
        return [];

        function isConnected(except: number): boolean {
            const graph: number[][] = Array.from({ length: n + 1 }, () => []);

            for (const [i, [a, b]] of edges.entries()) {
                if (i === except) continue;
                graph[a].push(b);
                graph[b].push(a);
            }

            const stack: number[] = [1];
            const visited = new Set<number>([1]);

            while (stack.length) {
                const node = stack.pop()!;

                for (const neighbor of graph[node]) {
                    if (visited.has(neighbor)) continue;
                    stack.push(neighbor);
                    visited.add(neighbor);
                }
            }

            return visited.size === n;
        }
    }
}
