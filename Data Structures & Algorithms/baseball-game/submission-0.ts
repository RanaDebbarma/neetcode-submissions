class Solution {
    /**
     * @param {string[]} operations
     * @return{
     */
    calPoints(operations: string[]): number {
        const score: number[] = [];

        for (const op of operations) {
            if (op === "+") {
                const val1 = score[score.length - 1];
                const val2 = score[score.length - 2];
                score.push(val1 + val2);
            } else if (op === "D") {
                score.push(score[score.length - 1] * 2);
            } else if (op === "C") {
                score.pop();
            } else {
                score.push(Number(op));
            }
        }

        return score.reduce((acc, next) => acc + next, 0);
    }
}
