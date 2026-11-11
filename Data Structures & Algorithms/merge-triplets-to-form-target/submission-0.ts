class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets: number[][], target: number[]): boolean {
        const merged = [0, 0, 0];

        for (const triplet of triplets) {
            if (triplet.some((val, i) => val > target[i])) continue;

            for (let i = 0; i < 3; i++) {
                merged[i] = Math.max(merged[i], triplet[i]);
            }
        }

        return merged.every((val, i) => val === target[i]);
    }
}
