class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length;

        if (n === 0) return 0;
        if (n === 1) return nums[0];

        return Math.max(robLinear(0, n - 2), robLinear(1, n - 1));

        function robLinear(start: number, end: number): number {
            let prev2 = 0,
                prev1 = 0;

            for (let i = start; i <= end; i++) {
                const curr = Math.max(prev1, prev2 + nums[i]);

                prev2 = prev1;
                prev1 = curr;
            }

            return prev1;
        }
    }
}
