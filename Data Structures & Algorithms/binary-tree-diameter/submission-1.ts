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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let diameter = 0;

        dfs(root);
        return diameter;

        function dfs(node: TreeNode | null): number {
            if (!node) return 0;

            const left = dfs(node.left);
            const right = dfs(node.right);

            diameter = Math.max(diameter, left + right);

            return 1 + Math.max(left, right);
        }
    }
}
