class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S: string): number[] {
        const lastIdx = new Int32Array(26);

        for (let i = 0; i < S.length; i++) {
            lastIdx[S.charCodeAt(i) - 97] = i;
        }

        const groups = [];
        let start = 0;
        let end = 0;

        for (let i = 0; i < S.length; i++) {
            const chIdx = S.charCodeAt(i) - 97;
            end = Math.max(end, lastIdx[chIdx]);

            if (end === i) {
                groups.push(end - start + 1);
                start = end + 1;
            }
        }

        return groups;
    }
}
