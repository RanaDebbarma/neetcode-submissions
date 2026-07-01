class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();

        function convertKey(str: string): string {
            const count = new Array(26).fill(0);
            for (const s of str) {
                const idx = s.charCodeAt(0) - 97;
                count[idx]++;
            }
            return count.join("#");
        }

        for (const word of strs) {
            const signature = convertKey(word);
            const existing = groups.get(signature);

            if (existing) {
                existing.push(word);
            } else {
                groups.set(signature, [word]);
            }
        }

        return [...groups.values()];
    }
}
