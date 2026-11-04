class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const totalSum = nums.reduce((acc, nxt) => acc + nxt, 0);

        if (totalSum % 2 !== 0) return false;

        const target = totalSum >> 1;
        const dp = Array(target + 1).fill(false);

        dp[0] = true;

        for (const num of nums) {
            for (let sum = target; sum >= num; sum--) {
                dp[sum] = dp[sum] || dp[sum - num];
            }

            if (dp[target]) return true;
        }

        return dp[target];
    }
}
