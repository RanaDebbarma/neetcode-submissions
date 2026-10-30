class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        const n = nums.length;

        let maxP = nums[0];
        let minP = nums[0];
        let result = nums[0];

        for (let i = 1; i < n; i++) {
            const num = nums[i];

            const prevMax = maxP * num;
            const prevMin = minP * num;

            maxP = Math.max(num, prevMax, prevMin);
            minP = Math.min(num, prevMax, prevMin);

            result = Math.max(result, maxP);
        }

        return result;
    }
}
