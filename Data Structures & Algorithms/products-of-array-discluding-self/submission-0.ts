class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const result = new Array<number>(n).fill(1);

        // Create a prefix product array
        for (let i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        let suffixProd = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= suffixProd;
            suffixProd *= nums[i];
        }

        return result;
    }
}
