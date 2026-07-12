class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0;
        let max_freq = 0;
        const hash = new Int32Array(26);

        for (let r = 0; r < s.length; r++) {
            const r_idx = s.charCodeAt(r) - 65;
            hash[r_idx]++;

            max_freq = Math.max(max_freq, hash[r_idx]);

            if (r - l + 1 - max_freq > k) {
                const l_idx = s.charCodeAt(l) - 65;
                hash[l_idx]--;
                l++;
            }
        }

        return s.length - l;
    }
}
