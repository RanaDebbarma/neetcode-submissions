class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const tails: number[] = [];

        for (const num of nums) {
            let l = 0;
            let r = tails.length;

            while (l < r) {
                const mid = l + ((r - l) >> 1);

                if (tails[mid] < num) {
                    l = mid + 1;
                } else {
                    r = mid;
                }
            }

            tails[l] = num;
        }

        return tails.length;
    }
}
