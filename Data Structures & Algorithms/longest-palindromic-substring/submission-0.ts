class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        const n = s.length;
        let res = "";

        // dp[start][end] stores whether s[start...end] is a palindrome
        const dp = Array.from({ length: n }, () => Array(n));

        // Process start in reverse so inner substring results are available
        for (let start = n - 1; start >= 0; start--) {
            for (let end = start; end < n; end++) {
                if (isPalindrome(start, end)) {
                    const length = end - start + 1;
                    if (length <= res.length) continue;

                    res = s.slice(start, end + 1);
                }
            }
        }

        return res;

        function isPalindrome(start: number, end: number): boolean {
            if (dp[start][end] === undefined) {
                // Matching outer characters + a palindromic inner substring
                // Substrings of length <= 3 need no inner check
                dp[start][end] =
                    s[start] === s[end] && (end - start <= 2 || dp[start + 1][end - 1]);
            }

            return dp[start][end];
        }
    }
}
