class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums: number[], target: number): boolean {
        const n = nums.length;
        let pivotIndex = 0;

        for (let i = 1; i < n; i++) {
            if (nums[i - 1] <= nums[i]) continue;
            pivotIndex = i;
            break;
        }

        const reOrdered = [...nums.slice(pivotIndex), ...nums.slice(0, pivotIndex)];

        let l = 0;
        let r = n - 1;
        while (l <= r) {
            const mid = l + ((r - l) >> 1);

            if (reOrdered[mid] === target) return true;
            if (reOrdered[mid] < target) l = mid + 1;
            else r = mid - 1;
        }

        return false;
    }
}
