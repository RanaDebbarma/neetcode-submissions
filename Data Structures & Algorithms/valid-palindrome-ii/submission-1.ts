class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (s[l] === s[r]) {
                l++;
                r--;
            } else {
                return this.checkPalindrome(s, l + 1, r) || this.checkPalindrome(s, l, r - 1);
            }
        }

        return true;
    }

    private checkPalindrome(s: string, l: number, r: number) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }

        return true;
    }
}
