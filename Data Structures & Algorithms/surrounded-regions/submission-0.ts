class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const ROWS = board.length;
        const COLS = board[0].length;
        const DIRS = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0);
            dfs(r, COLS - 1);
        }
        for (let c = 0; c < COLS; c++) {
            dfs(0, c);
            dfs(ROWS - 1, c);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "O") {
                    board[r][c] = "X";
                } else if (board[r][c] === "S") {
                    board[r][c] = "O";
                }
            }
        }

        function dfs(r: number, c: number): void {
            if (board[r][c] !== "O") return;

            const stack: [number, number][] = [[r, c]];
            board[r][c] = "S";

            while (stack.length) {
                const [currR, currC] = stack.pop()!;

                for (const [dr, dc] of DIRS) {
                    const nr = currR + dr;
                    const nc = currC + dc;

                    if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === "O") {
                        board[nr][nc] = "S";
                        stack.push([nr, nc]);
                    }
                }
            }
        }
    }
}
