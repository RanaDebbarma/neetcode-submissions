class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let res = 0;
        let count = 0;

        for (const num of nums) {
            if (count === 0) res = num;

            if (num === res) count++;
            else count--;
        }

        return res;
    }
}
