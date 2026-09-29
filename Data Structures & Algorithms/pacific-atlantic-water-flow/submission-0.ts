class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const DIRS = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        const pacific = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const atlantic = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pacific);
            dfs(r, COLS - 1, atlantic);
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pacific);
            dfs(ROWS - 1, c, atlantic);
        }

        const res: number[][] = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    res.push([r, c]);
                }
            }
        }

        return res;

        function dfs(r: number, c: number, visited: boolean[][]): void {
            const stack: [number, number][] = [[r, c]];

            while (stack.length) {
                const [r, c] = stack.pop()!;

                if (visited[r][c]) continue;

                visited[r][c] = true;

                for (const [dr, dc] of DIRS) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 &&
                        nr < ROWS &&
                        nc >= 0 &&
                        nc < COLS &&
                        !visited[nr][nc] &&
                        heights[nr][nc] >= heights[r][c]
                    ) {
                        stack.push([nr, nc]);
                    }
                }
            }
        }
    }
}
