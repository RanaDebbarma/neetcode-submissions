class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length & 1) return false;

        const pairs: Record<string, string> = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        const stack: string[] = [];

        for (const ch of s) {
            if (pairs[ch] === undefined) {
                stack.push(ch);
            } else if (stack.pop() !== pairs[ch]) {
                return false;
            }
        }

        return stack.length === 0;
    }
}
