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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        return height(root) !== -1;

        function height(node: TreeNode | null): number {
            if (!node) return 0;

            const left = height(node.left);
            if (left === -1) return -1;

            const right = height(node.right);
            if (right === -1) return -1;

            if (Math.abs(left - right) > 1) return -1;
            return 1 + Math.max(left, right);
        }
    }
}
