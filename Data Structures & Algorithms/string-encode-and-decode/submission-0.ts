class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result: string = "";
        for (const str of strs) {
            result += `${str.length}#${str}`;
        }
        console.log(result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < str.length) {
            // Find the next '#' delimiter starting from index i
            const hashIndex = str.indexOf("#", i);

            // Extract the length and convert to number
            const length = Number(str.substring(i, hashIndex));

            // Move pointer past the '#'
            i = hashIndex + 1;

            // Extract the word based on the length
            const word = str.substring(i, i + length);
            result.push(word);

            // Move pointer past the extracted word
            i += length;
        }

        return result;
    }
}
