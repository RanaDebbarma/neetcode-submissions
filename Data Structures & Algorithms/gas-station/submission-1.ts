class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        const n = gas.length;
        let start = 0;
        let total = 0;
        let tank = 0;

        for (let i = 0; i < n; i++) {
            const diff = gas[i] - cost[i];
            total += diff;
            tank += diff;

            if (tank < 0) {
                start = i + 1;
                tank = 0;
            }
        }

        return total >= 0 && start < n ? start : -1;
    }
}
