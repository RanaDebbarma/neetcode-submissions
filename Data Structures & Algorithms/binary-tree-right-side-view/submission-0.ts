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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return [];

        const result: number[] = [];
        const queue: TreeNode[] = [root];
        let pointer = 0;

        while (pointer < queue.length) {
            const levelSize = queue.length - pointer;

            for (let i = 0; i < levelSize; i++) {
                const currentNode = queue[pointer++];

                if (currentNode.right) queue.push(currentNode.right);
                if (currentNode.left) queue.push(currentNode.left);

                if (i === 0) result.push(currentNode.val);
            }
        }

        return result;
    }
}
