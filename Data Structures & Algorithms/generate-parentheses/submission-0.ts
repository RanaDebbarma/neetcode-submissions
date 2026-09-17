class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        let strs: string[] = [];

        backtrack(0, 0, "");

        return strs;

        function backtrack(open: number, close: number, str: string) {
            if (open === n && close === n) {
                strs.push(str);
                return;
            }

            if (open < n) {
                backtrack(open + 1, close, str + "(");
            }

            if (open > close) {
                backtrack(open, close + 1, str + ")");
            }
        }
    }
}
