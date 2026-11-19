class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n: number): number {
        let rev = 0;

        for (let i = 0; i < 32; i++) {
            const bit = (n >>> i) & 1;
            rev = (rev << 1) | bit;
        }

        return rev >>> 0;
    }
}
