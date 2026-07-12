class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0;
        let r = 1;
        let max_length = 0;

        while (s.length && r < s.length) {
            const current_window = s.substring(l, r + 1);
            const max_freq = findMaxFreq(current_window);
            const replacements = current_window.length - max_freq;

            if (replacements <= k) {
                if (max_length < current_window.length) max_length = current_window.length;
                r++;
            } else {
                l++;
                r++;
            }
        }

        return max_length;

        // Helper
        function findMaxFreq(s: string) {
            const hash = new Int32Array(26);
            for (const ch of s) {
                hash[ch.charCodeAt(0) - 65]++;
            }

            // extract max frequency;
            let maxFreq = 0;
            for (let i = 0; i < hash.length; i++) {
                const freq = hash[i];
                if (freq) {
                    if (maxFreq < freq) maxFreq = freq;
                }
            }

            return maxFreq;
        }
    }
}
