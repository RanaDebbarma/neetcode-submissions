class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const n = nums.length;
        const totalSum = nums.reduce((acc, nxt) => acc + nxt, 0);

        if (totalSum % 2 !== 0) return false;

        const target = totalSum / 2;
        const memo = Array.from({ length: n }, () => Array(target + 1));

        return dfs(0, target);

        function dfs(idx: number, remaining: number): boolean {
            if (remaining === 0) return true;
            if (remaining < 0 || idx >= n) return false;

            if (memo[idx][remaining] !== undefined) return memo[idx][remaining];

            // Include
            if (dfs(idx + 1, remaining - nums[idx])) return true;

            // Exclude
            if (dfs(idx + 1, remaining)) return true;

            return (memo[idx][remaining] = false);
        }
    }
}
