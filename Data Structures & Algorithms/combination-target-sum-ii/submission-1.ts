class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const res: number[][] = [];

        candidates.sort((a, b) => a - b);

        backtrack(0, [], 0);

        return res;

        function backtrack(i: number, comb: number[], sum: number) {
            if (sum === target) {
                res.push([...comb]);
                return;
            }

            if (i >= candidates.length || sum > target) return;

            comb.push(candidates[i]);
            backtrack(i + 1, comb, sum + candidates[i]);
            comb.pop();

            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) i++;

            backtrack(i + 1, comb, sum);
        }
    }
}
