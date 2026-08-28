class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const need = new Int32Array(26);
        const window = new Int32Array(26);

        for (let i = 0; i < s1.length; i++) {
            need[s1.charCodeAt(i) - 97]++;
            window[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            window[i] === need[i] && matches++;
        }

        if (matches === 26) return true;

        let l = 0;
        let r = s1.length;
        while (r < s2.length) {
            update(s2.charCodeAt(l) - 97, -1);
            update(s2.charCodeAt(r) - 97, 1);

            if (matches === 26) return true;

            l++;
            r++;
        }

        return false;

        function update(idx: number, delta: 1 | -1) {
            if (window[idx] === need[idx]) matches--;
            window[idx] += delta;
            if (window[idx] === need[idx]) matches++;
        }
    }
}
