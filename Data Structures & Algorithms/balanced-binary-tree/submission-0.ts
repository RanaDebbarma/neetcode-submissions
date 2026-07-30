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
        if (!root) return true;

        const left = height(root.left);
        const right = height(root.right);
        const difference = Math.abs(left - right);

        return difference <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right);

        function height(node: TreeNode | null): number {
            if (!node) return 0;
            return 1 + Math.max(height(node.left), height(node.right));
        }
    }
}
