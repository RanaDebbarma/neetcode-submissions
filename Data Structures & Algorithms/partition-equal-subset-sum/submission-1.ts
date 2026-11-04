class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const n = nums.length;
        const totalSum = nums.reduce((acc, curr) => acc + curr, 0);

        if (totalSum % 2 !== 0) return false;

        const target = totalSum / 2;
        const memo = Array.from({ length: n }, () => Array(target + 1));

        return dfs(0, target);

        function dfs(i: number, rem: number): boolean {
            if (rem === 0) return true;
            if (rem < 0 || i >= n) return false;

            if (memo[i][rem] !== undefined) return memo[i][rem];

            const res = dfs(i + 1, rem - nums[i]) || dfs(i + 1, rem);
            return (memo[i][rem] = res);
        }
    }
}
