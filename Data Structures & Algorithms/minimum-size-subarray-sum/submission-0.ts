class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let windowSum = 0;
        let minLength = Infinity;

        let l = 0;
        for (let r = 0; r < nums.length; r++) {
            windowSum += nums[r];

            while (windowSum >= target) {
                const length = r - l + 1;
                minLength = Math.min(minLength, length);

                windowSum -= nums[l];
                l++;
            }
        }

        return minLength === Infinity ? 0 : minLength;
    }
}
