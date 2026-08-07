class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let maxRight = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const newMax = Math.max(arr[i], maxRight);
            arr[i] = maxRight;
            maxRight = newMax;
        }

        return arr;
    }
}
