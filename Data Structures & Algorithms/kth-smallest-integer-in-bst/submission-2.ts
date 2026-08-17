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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const inorder: number[] = [];
        dfs(root);

        return inorder[k - 1];

        function dfs(node: TreeNode | null): void {
            if (!node || inorder.length >= k) return;

            dfs(node.left);
            inorder.push(node.val);
            dfs(node.right);
        }
    }
}
