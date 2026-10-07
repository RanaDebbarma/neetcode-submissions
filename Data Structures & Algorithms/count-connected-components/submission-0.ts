class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const graph: number[][] = Array.from({ length: n }, () => []);
        const visited = new Set<number>();

        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        let component = 0;

        for (let node = 0; node < n; node++) {
            if (visited.has(node)) continue;
            component++;

            const stack: number[] = [node];
            visited.add(node);

            while (stack.length) {
                const curr = stack.pop()!;

                for (const neighbor of graph[curr]) {
                    if (visited.has(neighbor)) continue;

                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }

        return component;
    }
}
