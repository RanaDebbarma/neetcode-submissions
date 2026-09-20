class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {
        const boards: string[][] = [];

        const cols = new Array(n).fill(false);
        const posDiag = new Array(2 * n - 1).fill(false);
        const negDiag = new Array(2 * n - 1).fill(false);

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
                const pos = r + c;
                const neg = r - c + n - 1;

                if (cols[c] || posDiag[pos] || negDiag[neg]) continue;

                cols[c] = true;
                posDiag[pos] = true;
                negDiag[neg] = true;
                board[r][c] = "Q";

                backtrack(r + 1);

                cols[c] = false;
                posDiag[pos] = false;
                negDiag[neg] = false;
                board[r][c] = ".";
            }
        }
    }
}
