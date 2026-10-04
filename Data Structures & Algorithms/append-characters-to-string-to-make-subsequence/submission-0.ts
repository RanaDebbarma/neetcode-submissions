class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        let i = 0;

        for (const ch of s) {
            if (ch === t[i]) {
                i++;
            }
        }

        return t.length - i;
    }
}
