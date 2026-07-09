class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let totalWater = 0;
        const maxPrefix: number[] = [];

        let prefix = 0;
        for (const h of height) {
            prefix = Math.max(prefix, h);
            maxPrefix.push(prefix);
        }

        let suffix = 0;
        for (let i = height.length - 1; i >= 0; i--) {
            suffix = Math.max(suffix, height[i]);
            maxPrefix[i] = Math.min(maxPrefix[i], suffix);

            totalWater += maxPrefix[i] - height[i];
        }

        return totalWater;
    }
}
