class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 0;
        let high = Math.max(...piles);

        while (low < high) {
            const mid = low + ((high - low) >> 1);
            const time = timeTaken(mid);

            if (time > h) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return high;

        function timeTaken(speed) {
            let time = 0;
            for (const pile of piles) {
                time += Math.ceil(pile / speed);
            }
            return time;
        }
    }
}
