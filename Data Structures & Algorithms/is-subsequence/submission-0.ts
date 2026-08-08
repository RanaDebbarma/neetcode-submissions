class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let i = 0;
        for (const ch of t) {
            if (ch === s[i]) {
                i++;
            }
        }

        return s.length === i;
    }
}
