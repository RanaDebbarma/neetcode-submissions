class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;

        const seen = new Set(nums);
        let maxSeq = 0;

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];

            if (!seen.has(num - 1)) {
                let currentSeq = 0;

                while (seen.has(num++)) currentSeq++;

                maxSeq = Math.max(maxSeq, currentSeq);
            }
        }

        return maxSeq;
    }
}
