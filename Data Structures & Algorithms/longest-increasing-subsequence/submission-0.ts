class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const n = nums.length;
        const memo = Array(n).fill(0);
        let maxLen = 0;

        for (let start = 0; start < n; start++) {
            maxLen = Math.max(maxLen, dfs(start));
        }

        return maxLen;

        function dfs(i: number): number {
            if (memo[i]) return memo[i];

            for (let next = i + 1; next < n; next++) {
                if (nums[i] < nums[next]) {
                    memo[i] = Math.max(memo[i], dfs(next));
                }
            }

            return (memo[i] = 1 + memo[i]);
        }
    }
}
