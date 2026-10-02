class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
        if (s.length < 0) return 0;

        let score = 0;
        let trailing = s.charCodeAt(0);

        for (let i = 1; i < s.length; i++) {
            const val = s.charCodeAt(i);
            score += Math.abs(trailing - val);
            trailing = val;
        }

        return score;
    }
}
