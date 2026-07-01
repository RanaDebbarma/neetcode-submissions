class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const [CAP_A, CAP_Z, SM_A, SM_Z, ZERO, NINE] = [..."AZaz09"].map((c) => c.charCodeAt(0));

        function checkAlphaNum(ch: string): boolean {
            const chCode = ch.charCodeAt(0);
            return (
                (chCode >= CAP_A && chCode <= CAP_Z) ||
                (chCode >= SM_A && chCode <= SM_Z) ||
                (chCode >= ZERO && chCode <= NINE)
            );
        }

        let [l, r] = [0, s.length - 1];
        while (l < r) {
            while (l < r && !checkAlphaNum(s[l])) l++;
            while (l < r && !checkAlphaNum(s[r])) r--;

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

            l++;
            r--;
        }

        return true;
    }
}
