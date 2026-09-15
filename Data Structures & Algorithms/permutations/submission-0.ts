class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res: number[][] = [];
        const used = new Array(nums.length).fill(false);

        backtrack([]);

        return res;

        function backtrack(perm: number[]) {
            if (perm.length === nums.length) {
                res.push([...perm]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue;

                used[i] = true;

                perm.push(nums[i]);
                backtrack(perm);

                used[i] = false;
                perm.pop();
            }
        }
    }
}
