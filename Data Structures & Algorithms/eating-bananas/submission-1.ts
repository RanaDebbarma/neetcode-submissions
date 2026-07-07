class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const maxK = Math.max(...piles);
        let l = 1;
        let r = maxK;
        let minSpeed = maxK;

        // Binary search
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            // find minSpeed
            let hours = 0;
            for (const pile of piles) {
                hours += Math.ceil(pile / mid);
            }

            if (hours <= h) {
                minSpeed = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return minSpeed;
    }
}
