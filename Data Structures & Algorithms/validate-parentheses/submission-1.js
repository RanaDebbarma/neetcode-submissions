class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        const stack = [];

        for (const ch of s) {
            if (ch in map) {
                if (map[ch] !== stack.pop()) return false;
            } else {
                stack.push(ch);
            }
        }

        return stack.length === 0;
    }
}
