class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = position
            .map((pos, i) => [pos, (target - pos) / speed[i]] as [number, number])
            .sort((a, b) => b[0] - a[0]);

        let fleets = 0;
        let fleetTime = 0;

        for (const [_, time] of cars) {
            if (time > fleetTime) {
                fleetTime = time;
                fleets++;
            }
        }

        return fleets;
    }
}
