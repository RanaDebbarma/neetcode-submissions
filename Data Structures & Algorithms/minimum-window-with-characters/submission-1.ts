class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (s.length < t.length) return "";

        const need = new Int32Array(128);
        const window = new Int32Array(128);

        let required = 0;
        for (let i = 0; i < t.length; i++) {
            const code = t.charCodeAt(i);
            if (need[code] === 0) required++;
            need[code]++;
        }

        let formed = 0;
        let l = 0;
        let minStart = 0;
        let minLength = Infinity;

        for (let r = 0; r < s.length; r++) {
            const code = s.charCodeAt(r);

            if (need[code] > 0) {
                window[code]++;
                if (window[code] === need[code]) {
                    formed++;
                }
            }

            while (formed === required) {
                const windowLength = r - l + 1;

                if (windowLength < minLength) {
                    minLength = windowLength;
                    minStart = l;
                }

                const lCode = s.charCodeAt(l);

                if (need[lCode] > 0) {
                    if (window[lCode] === need[lCode]) {
                        formed--;
                    }
                    window[lCode]--;
                }
                l++;
            }
        }
        return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
    }
}
