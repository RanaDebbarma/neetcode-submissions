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

type Result = { rob: number; skip: number };

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    rob(root: TreeNode | null): number {
        if (!root) return 0;

        const result = dfs(root);

        return Math.max(result.rob, result.skip);

        function dfs(node: TreeNode): Result {
            if (!node) return { rob: 0, skip: 0 };

            const left = dfs(node.left);
            const right = dfs(node.right);

            const robCurrent = node.val + left.skip + right.skip;
            const skipCurrent = Math.max(left.rob, left.skip) + Math.max(right.rob, right.skip);

            return { rob: robCurrent, skip: skipCurrent };
        }
    }
}
