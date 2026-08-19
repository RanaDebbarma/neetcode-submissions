class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const result = new Array(n).fill(0);
        const stack = [];

        for (let i = 0; i < n; i++) {
            while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const idx = stack.pop();
                result[idx] = i - idx;
            }

            stack.push(i);
        }

        return result;
    }
}
