class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const seen = new Int32Array(128);

        let maxLength = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const charCode = s.charCodeAt(r);

            l = Math.max(l, seen[charCode]);
            maxLength = Math.max(maxLength, r - l + 1);

            seen[charCode] = r + 1;
        }

        return maxLength;
    }
}
