class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        const length1 = nums1.length; // smaller
        const length2 = nums2.length; // bigger
        const totalSize = length1 + length2;

        let half = (totalSize + 1) >> 1;

        let low = 0;
        let high = length1;

        while (low <= high) {
            const partition1 = (low + high) >> 1;
            const partition2 = half - partition1;

            const left1 = partition1 > 0 ? nums1[partition1 - 1] : -Infinity;
            const right1 = partition1 < length1 ? nums1[partition1] : Infinity;

            const left2 = partition2 > 0 ? nums2[partition2 - 1] : -Infinity;
            const right2 = partition2 < length2 ? nums2[partition2] : Infinity;

            if (left1 > right2) {
                high = partition1 - 1;
            } else if (left2 > right1) {
                low = partition1 + 1;
            } else {
                const leftMax = Math.max(left1, left2);

                if (totalSize % 2 === 1) return leftMax;

                const rightMin = Math.min(right1, right2);

                return (leftMax + rightMin) / 2;
            }
        }

        return 0;
    }
}
