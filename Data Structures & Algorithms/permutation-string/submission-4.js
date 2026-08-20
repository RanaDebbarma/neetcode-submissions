class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const freq = new Int32Array(26);

        for (let i = 0; i < s1.length; i++) {
            freq[s1.charCodeAt(i) - 97]--;
            freq[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (freq[i] === 0) matches++;
        }

        if (matches === 26) return true;

        for (let r = s1.length; r < s2.length; r++) {
            const l = r - s1.length;

            updateFreq(s2.charCodeAt(l) - 97, -1);
            updateFreq(s2.charCodeAt(r) - 97, 1);

            if (matches === 26) return true;
        }

        return false;

        function updateFreq(idx, delta) {
            if (freq[idx] === 0) matches--;
            freq[idx] += delta;
            if (freq[idx] === 0) matches++;
        }
    }
}
