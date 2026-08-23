class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length > s.length) return "";

        const need = new Map<string, number>();

        for (const ch of t) {
            need.set(ch, (need.get(ch) ?? 0) + 1);
        }

        let have = 0;
        const needCount = need.size;

        const window = new Map<string, number>();

        let l = 0;

        let minStart = 0;
        let minLength = Infinity;

        for (let r = 0; r < s.length; r++) {
            const ch = s[r];

            if (need.has(ch)) {
                window.set(ch, (window.get(ch) ?? 0) + 1);

                if (window.get(ch) === need.get(ch)) {
                    have++;
                }
            }

            while (have === needCount) {
                const windowLength = r - l + 1;

                if (windowLength < minLength) {
                    minLength = windowLength;
                    minStart = l;
                }

                const leftChar = s[l];

                if (window.has(leftChar)) {
                    window.set(leftChar, (window.get(leftChar) ?? 0) - 1);

                    if (window.get(leftChar) < need.get(leftChar)) have--;
                }

                l++;
            }
        }

        return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
    }
}
