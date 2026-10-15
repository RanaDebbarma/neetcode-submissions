class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let prev1 = 1;
        let prev2 = 1;

        for (let i = 2; i <= n; i++) {
            const next = prev1 + prev2;
            prev1 = prev2;
            prev2 = next;
        }

        return prev2;
    }
}
