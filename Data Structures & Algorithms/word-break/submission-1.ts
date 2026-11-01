class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const n = s.length;
        const dp = Array(n + 1).fill(false);

        dp[n] = true;

        for (let i = n - 1; i >= 0; i--) {
            for (const word of wordDict) {
                const len = word.length;

                if (i + len > n ) continue;

                let idx = 0;
                while(idx < len && word[idx] === s[i + idx]) idx++;

                if (idx === len && dp[i + len]) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[0];
    }
}
