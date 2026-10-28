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

            const prevMax = maxP;
            const prevMin = minP;

            maxP = Math.max(num, prevMax * num, prevMin * num);
            minP = Math.min(num, prevMax * num, prevMin * num);

            result = Math.max(result, maxP);
        }

        return result;
    }
}
