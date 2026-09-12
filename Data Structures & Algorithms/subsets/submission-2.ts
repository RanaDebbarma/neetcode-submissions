class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const ans: number[][] = [];

        backtrack(0, []);

        return ans;

        function backtrack(i: number, subset: number[]) {
            if (i >= nums.length) {
                ans.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            backtrack(i + 1, subset);

            subset.pop();
            backtrack(i + 1, subset);
        }
    }
}
