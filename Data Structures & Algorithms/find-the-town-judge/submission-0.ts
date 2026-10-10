class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n: number, trust: number[][]): number {
        const trustScores = new Array(n + 1).fill(0);

        for (const [ai, bi] of trust) {
            trustScores[ai]--;
            trustScores[bi]++;
        }

        for (let i = 1; i <= n; i++) {
            if (trustScores[i] === n - 1) return i;
        }

        return -1;
    }
}
