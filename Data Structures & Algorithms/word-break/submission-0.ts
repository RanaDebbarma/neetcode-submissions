class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const n = s.length;
        const memo = new Array(n).fill(-1);

        return dfs(0);

        function dfs(i: number): boolean {
            if (i === n) return true;

            if (memo[i] !== -1) return memo[i] === 1;

            for (const word of wordDict) {
                if (i + word.length > n) continue;

                let idx = 0;
                while (idx < word.length && word[idx] === s[i + idx]) idx++;

                if (idx === word.length && dfs(i + idx)) {
                    memo[i] = 1;
                    return true;
                }
            }

            memo[i] = 0;
            return false;
        }
    }
}
