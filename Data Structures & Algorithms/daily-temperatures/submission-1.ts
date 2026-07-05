class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array(temperatures.length).fill(0);
        const monoStack: number[] = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (monoStack.length && temperatures[i] > temperatures[monoStack.at(-1)!]) {
                const prev = monoStack.pop()!;
                result[prev] = i - prev;
            }
            monoStack.push(i);
        }

        return result;
    }
}
