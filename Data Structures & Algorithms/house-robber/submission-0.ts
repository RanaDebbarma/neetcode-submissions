class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length;

        if (n === 0) return 0;
        if (n <= 2) return Math.max(...nums);

        let prev2 = nums[0];
        let prev1 = Math.max(nums[0], nums[1]);

        for (let house = 2; house < n; house++) {
            const robCurrent = prev2 + nums[house];
            const skipCurrent = prev1;

            const current = Math.max(robCurrent, skipCurrent);

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}
