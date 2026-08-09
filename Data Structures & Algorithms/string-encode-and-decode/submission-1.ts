class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const res: string[] = [];
        for (const word of strs) {
            res.push(`${word.length}#${word}`);
        }
        return res.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = [];

        let i = 0;
        while (i < str.length) {
            const hashIndex = str.indexOf("#", i);

            const length = Number(str.slice(i, hashIndex));

            i = hashIndex + 1;
            res.push(str.slice(i, i + length));
            i += length;
        }

        return res;
    }
}
