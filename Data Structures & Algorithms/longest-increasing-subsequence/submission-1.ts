class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const n = nums.length;
        const dp = Array(n).fill(1);

        for (let i = 0; i < n; i++) {
            for (let prev = 0; prev < i; prev++) {
                if (nums[prev] < nums[i]) {
                    dp[i] = Math.max(dp[i], dp[prev] + 1);
                }
            }
        }

        return Math.max(...dp);
    }
}
