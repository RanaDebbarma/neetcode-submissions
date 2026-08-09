class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(ch: string): boolean {
        const code = ch.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) || (code >= 97 && code <= 122) || (code >= 65 && code <= 90)
        );
    }

    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) l++;
            while (l < r && !this.isAlphanumeric(s[r])) r--;

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

            l++;
            r--;
        }

        return true;
    }
}
