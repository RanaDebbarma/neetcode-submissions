class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const memo = new Array<number>(n + 1).fill(-1);
        return climb(0);

        function climb(prog: number): number {
            if (prog >= n) return prog === n ? 1 : 0;

            if (memo[prog] !== -1) return memo[prog];

            memo[prog] = climb(prog + 1) + climb(prog + 2);

            return memo[prog];
        }
    }
}
