class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const ans: number[] = [];
        const deque: number[] = [];
        let left = 0;

        for (let r = 0; r < nums.length; r++) {
            while (left < deque.length && deque[left] <= r - k) {
                left++;
            }

            while (left < deque.length && nums[deque[deque.length - 1]] <= nums[r]) {
                deque.pop();
            }

            deque.push(r);

            if (r >= k - 1) {
                ans.push(nums[deque[left]]);
            }
        }

        return ans;
    }
}
