class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if (digits.length === 0) return [];

        const map: Record<string, string> = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        };

        const res: string[] = [];

        backtrack(0, "");

        return res;

        function backtrack(i: number, comb: string) {
            if (i === digits.length) {
                res.push(comb);
                return;
            }

            const chars = map[digits[i]];

            for (const char of chars) {
                backtrack(i + 1, comb + char);
            }
        }
    }
}
