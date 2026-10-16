class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const n = cost.length;

        let prev2 = 0,
            prev1 = 0;

        for (let step = 2; step <= n; step++) {
            const oneStep = prev1 + cost[step - 1];
            const twoStep = prev2 + cost[step - 2];

            const curr = Math.min(oneStep, twoStep);

            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }
}
