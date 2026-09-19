class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {
        const boards: string[][] = [];

        const colSet = new Set();
        const posDiagSet = new Set<number>();
        const negDiagSet = new Set<number>();

        const board = Array.from({ length: n }, () => new Array(n).fill("."));

        backtrack(0);

        return boards;

        function backtrack(r: number) {
            if (r === n) {
                const copy = board.map((r) => r.join(""));
                boards.push(copy);
                return;
            }

            for (let c = 0; c < n; c++) {
                if (colSet.has(c) || posDiagSet.has(r + c) || negDiagSet.has(r - c)) continue;

                board[r][c] = "Q";
                colSet.add(c);
                posDiagSet.add(r + c);
                negDiagSet.add(r - c);

                backtrack(r + 1);

                board[r][c] = ".";
                colSet.delete(c);
                posDiagSet.delete(r + c);
                negDiagSet.delete(r - c);
            }
        }
    }
}
