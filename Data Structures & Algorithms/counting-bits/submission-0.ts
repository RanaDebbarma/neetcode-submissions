class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        const res = Array(n + 1).fill(0);

        for (let i = 1; i <= n; i++) {
            let ones = 0;
            let currN = i;

            while (currN !== 0) {
                currN &= currN - 1;
                ones++;
            }

            res[i] = ones;
        }

        return res;
    }
}
