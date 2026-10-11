class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const n = edges.length + 1;
        const parent = Array.from({ length: n }, (_, i) => i);
        const size = Array(n).fill(1);

        for (const [a, b] of edges) {
            if (!union(a, b)) return [a, b];
        }

        return [];

        function findParent(x: number): number {
            if (x === parent[x]) return x;
            return (parent[x] = findParent(parent[x]));
        }

        function union(a: number, b: number): boolean {
            let rootA = findParent(a);
            let rootB = findParent(b);

            if (rootA === rootB) return false;

            if (size[rootA] < size[rootB]) {
                [rootA, rootB] = [rootB, rootA];
            }

            parent[rootB] = rootA;
            size[rootA] += size[rootB];

            return true;
        }
    }
}
