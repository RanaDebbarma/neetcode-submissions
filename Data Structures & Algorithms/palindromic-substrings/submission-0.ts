class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        const n = s.length;
        const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));

        let palindromes = 0;

        for (let left = n - 1; left >= 0; left--) {
            for (let right = left; right < n; right++) {
                if (isPalindrome(left, right)) palindromes++;
            }
        }

        return palindromes;

        function isPalindrome(left: number, right: number): boolean {
            dp[left][right] =
                s[left] === s[right] && (right - left <= 1 || dp[left + 1][right - 1]);

            return dp[left][right];
        }
    }
}
