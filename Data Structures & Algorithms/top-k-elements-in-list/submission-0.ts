class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const result: number[] = [];
        const frequencyMap = new Map<number, number>();
        // const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        // better bucket initialization
        const buckets: number[][] = new Array(nums.length + 1);
        for (let i = 0; i < buckets.length; i++) {
            buckets[i] = [];
        }

        // count frequency
        for (const num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        // populate buckets
        frequencyMap.forEach((freq, num) => {
            buckets[freq].push(num);
        });

        // extract top k elements
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }

        return result;
    }
}
