class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const DIRS = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        const queue: [number, number][] = [];
        let head = 0;
        let fresh = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) fresh++;
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }
            }
        }

        if (fresh === 0) return 0;

        let time = -1;
        while (head < queue.length) {
            const levelSize = queue.length - head;

            for (let i = 0; i < levelSize; i++) {
                const [r, c] = queue[head++];

                for (const [dr, dc] of DIRS) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || grid[nr][nc] !== 1)
                        continue;

                    grid[nr][nc] = 2;
                    queue.push([nr, nc]);
                    fresh--;
                }
            }

            time++;
        }

        return fresh === 0 ? time : -1;
    }
}
