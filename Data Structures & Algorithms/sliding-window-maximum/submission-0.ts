class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const ans: number[] = [];
        const deque: number[] = [];
        let head = 0;

        for (let r = 0; r < nums.length; r++) {
            while (head < deque.length && deque[head] < r - k + 1) {
                head++;
            }

            while (deque.length > head && nums[deque[deque.length - 1]] <= nums[r]) {
                deque.pop();
            }

            deque.push(r);

            if (r >= k - 1) {
                ans.push(nums[deque[head]]);
            }
        }

        return ans;
    }
}
