class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0;
        let r = nums.length - 1;
        let min = nums[0];

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            const curr = nums[mid];

            min = Math.min(min, curr);

            if (nums[0] > curr) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return min;
    }
}
