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
    goodNodes(root: TreeNode | null): number {
        let numberOfGoodNodes = 0;

        dfs(root, -Infinity);
        return numberOfGoodNodes;

        function dfs(node: TreeNode | null, maxSoFar: number) {
            if (!node) return;

            if (node.val >= maxSoFar) numberOfGoodNodes++;

            const newMax = Math.max(maxSoFar, node.val);
            dfs(node.left, newMax);
            dfs(node.right, newMax);
        }
    }
}
