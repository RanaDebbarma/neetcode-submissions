class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const queue: [number, number][] = [];
        let head = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }

        while (head < queue.length) {
            const [r, c] = queue[head++];

            const neighbors = [
                [r - 1, c],
                [r + 1, c],
                [r, c - 1],
                [r, c + 1],
            ];

            for (const [nr, nc] of neighbors) {
                if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || grid[nr][nc] !== 2147483647) {
                    continue;
                }

                grid[nr][nc] = grid[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }
}
