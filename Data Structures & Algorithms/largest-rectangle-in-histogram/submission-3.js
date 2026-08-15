class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;

        for (let i = 0; i <= heights.length; i++) {
            const currHeight = i === heights.length ? 0 : heights[i];

            while (stack.length && currHeight < heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()];
                const width = stack.length ? i - stack[stack.length - 1] - 1 : i;

                const area = height * width;

                if (maxArea < area) maxArea = area;
            }

            stack.push(i);
        }

        return maxArea;
    }
}
