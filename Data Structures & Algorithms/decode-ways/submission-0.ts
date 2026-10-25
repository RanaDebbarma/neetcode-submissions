class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        const n = s.length;
        const memo: (number | undefined)[] = Array(n);

        return dfs(0);

        function dfs(i: number): number {
            if (i === n) return 1;
            if (s[i] === "0") return 0;

            if (memo[i] !== undefined) return memo[i];

            memo[i] = dfs(i + 1);

            if (i + 1 < n && Number(s.slice(i, i + 2)) <= 26) {
                memo[i] += dfs(i + 2);
            }

            return memo[i];
        }
    }
}
