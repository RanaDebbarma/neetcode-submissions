class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums: number[], target: number): boolean {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) return true;
        }

        return false;
    }
}
