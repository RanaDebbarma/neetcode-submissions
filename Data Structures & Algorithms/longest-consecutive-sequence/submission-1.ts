class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;

        const set = new Set<number>(nums);
        let maxLength = 0;

        for (const num of set) {
            if (!set.has(num - 1)) {
                let currLength = 1;
                let current = num;

                while (set.has(current + 1)) {
                    currLength++;
                    current++;
                }
                maxLength = Math.max(maxLength, currLength);
            }
        }
        return maxLength;
    }
}
