class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let [l, r] = [0, numbers.length - 1];

        while (l < r) {
            const sum = numbers[l] + numbers[r];
            if (sum < target) l++;
            if (sum > target) r--;
            if (sum === target) return [l + 1, r + 1];
        }

        return [];
    }
}
