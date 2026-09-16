class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res: number[][] = [];

        nums.sort((a, b) => a - b);

        backtrack(0, []);

        return res;

        function backtrack(i: number, subset: number[]) {
            res.push([...subset]);

            for (let j = i; j < nums.length; j++) {
                if (j > i && nums[j] === nums[j - 1]) continue;

                subset.push(nums[j]);
                backtrack(j + 1, subset);
                subset.pop();
            }
        }
    }
}
