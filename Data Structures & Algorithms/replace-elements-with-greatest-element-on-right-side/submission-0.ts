class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const ans: number[] = new Array(arr.length).fill(-1);

        for (let i = arr.length - 1; i >= 0; i--) {
            ans[i - 1] = arr[i] > ans[i] ? arr[i] : ans[i];
        }

        return ans;
    }
}
