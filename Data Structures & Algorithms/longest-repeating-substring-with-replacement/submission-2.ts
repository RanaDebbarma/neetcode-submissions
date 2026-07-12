class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0;
        let max_length = 0;
        let max_freq = 0;
        const hash = new Int32Array(26);

        for (let r = 0; r < s.length; r++) {
            const rightCharIdx = s.charCodeAt(r) - 65;
            hash[rightCharIdx]++;

            max_freq = Math.max(max_freq, hash[rightCharIdx]);

            const current_window_len = r - l + 1;
            if (current_window_len - max_freq > k) {
                const leftCharIdx = s.charCodeAt(l) - 65;
                hash[leftCharIdx]--;
                l++;
            }

            max_length = Math.max(max_length, r - l + 1);
        }

        return max_length;
    }
}
