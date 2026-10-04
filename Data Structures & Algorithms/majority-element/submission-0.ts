class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const count = new Map<number, number>();
        let maj = 0;
        let maxFreq = 0;

        for (const num of nums) {
            count.set(num, (count.get(num) ?? 0) + 1);
            const freq = count.get(num)!;

            if (maxFreq < freq) {
                maxFreq = freq;
                maj = num;
            }
        }

        return maj;
    }
}
