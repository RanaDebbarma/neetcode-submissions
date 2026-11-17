class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        const n = nums.length;
        let maxDist = 0;

        for (let i = 0; i < n; i++) {
            if (maxDist < i) return false;
            if (maxDist >= n - 1) return true;

            maxDist = Math.max(i + nums[i], maxDist);
        }

        return true;
    }
}
