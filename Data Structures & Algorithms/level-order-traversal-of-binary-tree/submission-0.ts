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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];

        const result: number[][] = [];
        const queue: TreeNode[] = [root];
        let pointer = 0;

        while (pointer < queue.length) {
            const levelSize = queue.length - pointer;
            const currentLevel: number[] = [];

            for (let i = 0; i < levelSize; i++) {
                const currentNode = queue[pointer++];
                currentLevel.push(currentNode.val);

                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);
            }

            result.push(currentLevel);
        }

        return result;
    }
}
