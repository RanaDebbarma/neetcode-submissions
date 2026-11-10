class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand: number[], groupSize: number): boolean {
        const n = hand.length;

        if (n % groupSize !== 0) return false;

        hand.sort((a, b) => a - b);
        const freq = new Map<number, number>();

        for (const card of hand) {
            freq.set(card, (freq.get(card) ?? 0) + 1);
        }

        for (const card of hand) {
            const count = freq.get(card) ?? 0;
            if (count === 0) continue;

            for (let next = card; next < card + groupSize; next++) {
                const remaining = freq.get(next) ?? 0;
                if (remaining === 0) return false;

                freq.set(next, remaining - 1);
            }
        }

        return true;
    }
}
