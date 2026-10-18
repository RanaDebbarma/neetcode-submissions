class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        const n = s.length;
        let res = "";

        for (let i = 0; i < n; i++) {
            // odd length
            expandAroundCenter(i, i);

            // even length
            expandAroundCenter(i, i + 1);
        }

        return res;

        function expandAroundCenter(left: number, right: number): void {
            while (left >= 0 && right < n && s[left] === s[right]) {
                left--;
                right++;
            }

            if (right - left - 1 > res.length) {
                res = s.slice(left + 1, right);
            }
        }
    }
}
