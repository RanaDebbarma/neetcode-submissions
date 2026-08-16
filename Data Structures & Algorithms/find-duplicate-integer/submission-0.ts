class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let slow = nums[0];
        let fast = nums[0];

        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast);

        let pointer = nums[0];
        while (pointer !== fast) {
            pointer = nums[pointer];
            fast = nums[fast];
        }

        return fast;
    }
}
