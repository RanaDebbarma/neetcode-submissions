class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        const n = nums.length;
        let currentEnd = 0;
        let maxDist = 0;
        let jumps = 0;

        for (let i = 0; i < n - 1; i++) {
            maxDist = Math.max(maxDist, i + nums[i]);

            if (i === currentEnd) {
                jumps++;
                currentEnd = maxDist;
            }

            if (currentEnd >= n - 1) return jumps;
        }

        return jumps;
    }
}
