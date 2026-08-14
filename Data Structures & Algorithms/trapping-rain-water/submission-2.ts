class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let totalWater = 0;

        let l = 0;
        let r = height.length - 1;

        let leftMax = 0;
        let rightMax = 0;

        while (l < r) {
            leftMax = Math.max(leftMax, height[l]);
            rightMax = Math.max(rightMax, height[r]);

            if (leftMax < rightMax) {
                totalWater += leftMax - height[l];
                l++;
            } else {
                totalWater += rightMax - height[r];
                r--;
            }
        }

        return totalWater;
    }
}
