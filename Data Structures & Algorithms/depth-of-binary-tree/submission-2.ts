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
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;

        let depth = 0;
        let head = 0;
        const queue: TreeNode[] = [root];

        while (head < queue.length) {
            const levelSize = queue.length - head;

            for (let i = 0; i < levelSize; i++) {
                const curr = queue[head];
                head++;

                curr.left && queue.push(curr.left);
                curr.right && queue.push(curr.right);
            }

            depth++;
        }

        return depth;
    }
}
