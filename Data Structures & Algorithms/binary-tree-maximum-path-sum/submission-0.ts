/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root: TreeNode | null): number {
        let maxSum = -Infinity;

        dfs(root);

        return maxSum;

        function dfs(node: TreeNode) {
            if (!node) return 0;

            const leftGain = Math.max(0, dfs(node.left));
            const rightGain = Math.max(0, dfs(node.right));

            const currentPathSum = node.val + leftGain + rightGain;

            maxSum = Math.max(maxSum, currentPathSum);

            return node.val + Math.max(leftGain, rightGain);
        }
    }
}
