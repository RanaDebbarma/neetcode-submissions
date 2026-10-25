class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        const n = s.length;
        let prev2 = 1, // dp[i - 2]
            prev1 = 1; // dp[i - 1]

        for (let i = 1; i <= n; i++) {
            let curr = 0;

            // single digit;
            if (s[i - 1] !== "0") {
                curr = prev1;
            }

            // double digit
            if (i >= 2) {
                const twoDigit = Number(s[i - 2] + s[i - 1]);
                if (twoDigit >= 10 && twoDigit <= 26) {
                    curr += prev2;
                }
            }

            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }
}
