class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const count = new Array<number>(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            const idx = s.codePointAt(i)! - "a".codePointAt(0)!;
            count[idx]++;
        }
        for (let i = 0; i < t.length; i++) {
            const idx = t.codePointAt(i)! - "a".codePointAt(0)!;
            count[idx]--;
            if (count[idx] === -1) return false;
        }

        return true;
    }
}
