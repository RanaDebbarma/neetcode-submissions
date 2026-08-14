class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack: number[] = [];
        let maxArea = 0;

        for (let i = 0; i <= heights.length; i++) {
            const currentHeight = i === heights.length ? 0 : heights[i];

            while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()!];

                const width = stack.length ? i - stack[stack.length - 1] - 1 : i;

                maxArea = Math.max(maxArea, height * width);
            }

            if (i < heights.length) {
                stack.push(i);
            }
        }

        return maxArea;
    }
}
