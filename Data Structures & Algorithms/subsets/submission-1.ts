class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        if (!nums.length) return [[]];

        const ans: number[][] = [];
        const subset: number[] = [];

        backtrack(0);

        return ans;

        function backtrack(i: number): void {
            if (i >= nums.length) {
                // save a copy of subset
                ans.push([...subset]);
                return;
            }

            // include num
            subset.push(nums[i]);
            backtrack(i + 1);

            // exlude num
            subset.pop();
            backtrack(i + 1);
        }
    }
}
