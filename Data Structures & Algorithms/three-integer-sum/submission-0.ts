class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result: number[][] = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicate first numbers
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    result.push([nums[i], nums[l], nums[r]]);

                    l++;
                    r--;

                    // Skip duplicate second numbers
                    while (l < r && nums[l] === nums[l - 1]) l++;

                    // Skip duplicate third numbers
                    while (l < r && nums[r] === nums[r + 1]) r--;
                }
            }
        }

        return result;
    }
}
