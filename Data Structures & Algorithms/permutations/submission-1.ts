class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res: number[][] = [];

        backtrack(0);

        return res;

        function backtrack(start: number) {
            if (start === nums.length) {
                res.push([...nums]);
                return;
            }

            for (let i = start; i < nums.length; i++) {
                [nums[i], nums[start]] = [nums[start], nums[i]];

                backtrack(start + 1);

                [nums[i], nums[start]] = [nums[start], nums[i]];
            }
        }
    }
}
