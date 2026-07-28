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
        if (!root) return 0;

        let diameter = 0;
        const stack: TreeNode[] = [root];

        while (stack.length) {
            const currentNode = stack.pop()!;

            diameter = Math.max(diameter, diameterOfSubTree(currentNode));

            if (currentNode.left) stack.push(currentNode.left);
            if (currentNode.right) stack.push(currentNode.right);
        }

        return diameter;

        function diameterOfSubTree(node: TreeNode | null) {
            if (!node) return 0;
            return height(node.left) + height(node.right);
        }

        function height(node: TreeNode | null): number {
            if (!node) return 0;
            return 1 + Math.max(height(node.left), height(node.right));
        }
    }
}
