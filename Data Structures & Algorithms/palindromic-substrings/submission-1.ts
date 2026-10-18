class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        const n = s.length;
        let palindromes = 0;

        for (let i = 0; i < n; i++) {
            expand(i, i);
            expand(i, i + 1);
        }

        return palindromes;

        function expand(left: number, right: number): void {
            while (left >= 0 && right < n && s[left] === s[right]) {
                palindromes++;
                left--;
                right++;
            }
        }
    }
}
