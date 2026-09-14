class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res: number[][] = [];

        backtrack(0, [], 0);

        return res;

        function backtrack(i: number, comb: number[], sum: number) {
            if (sum === target) {
                res.push([...comb]);
                return;
            }

            if (i >= nums.length || sum > target) return;

            comb.push(nums[i]);
            backtrack(i, comb, sum + nums[i]);
            comb.pop();

            backtrack(i + 1, comb, sum);
        }
    }
}
