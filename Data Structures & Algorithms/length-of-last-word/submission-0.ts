class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let l = 0;

        for (let i = s.length - 1; i >= 0; i--) {
            const ch = s[i];
            if (ch === " ") {
                if (l > 0) break;
            } else {
                l++;
            }
        }

        return l;
    }
}
