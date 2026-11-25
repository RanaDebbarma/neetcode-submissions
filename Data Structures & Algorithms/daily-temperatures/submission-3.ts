class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const len = temperatures.length;
        const resut: number[] = new Array(len).fill(0);
        const monoStack: number[] = [];

        for (let i = 0; i < len; i++) {
            while (
                monoStack.length &&
                temperatures[monoStack[monoStack.length - 1]] < temperatures[i]
            ) {
                const idx = monoStack.pop()!;
                resut[idx] = i - idx;
            }

            monoStack.push(i);
        }

        return resut;
    }
}
