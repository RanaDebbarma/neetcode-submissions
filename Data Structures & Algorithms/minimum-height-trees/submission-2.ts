class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n: number, edges: number[][]): number[] {
        if (n === 1) return [0];

        const graph: number[][] = Array.from({ length: n }, () => []);
        const degree = new Int32Array(n);

        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
            degree[a]++;
            degree[b]++;
        }

        let leaves: number[] = [];

        for (let node = 0; node < n; node++) {
            if (degree[node] === 1) leaves.push(node);
        }

        let remainingNodes = n;

        while (remainingNodes > 2) {
            remainingNodes -= leaves.length;
            const nextLeaves: number[] = [];

            for (const leaf of leaves) {
                for (const neighbor of graph[leaf]) {
                    degree[neighbor]--;

                    if (degree[neighbor] === 1) {
                        nextLeaves.push(neighbor);
                    }
                }
            }

            leaves = nextLeaves;
        }

        return leaves;
    }
}
