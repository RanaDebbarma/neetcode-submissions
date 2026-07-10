class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let longestLength = 0;
        const seen = new Map<string, number>();

        let l = 0;

        for (let r = 0; r < s.length; r++) {
            if (seen.has(s[r])) {
                l = Math.max(l, seen.get(s[r])! + 1);
            }

            seen.set(s[r], r);
            longestLength = Math.max(longestLength, r - l + 1);
        }

        return longestLength;
    }
}
