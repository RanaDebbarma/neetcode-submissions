class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let ones = 0;
        while (n !== 0) {
            n &= n - 1;
            ones++;
        }

        return ones;
    }
}
