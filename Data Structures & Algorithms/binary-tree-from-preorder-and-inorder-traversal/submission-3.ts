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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        const inorderIndex = new Map<number, number>();

        for (let i = 0; i < inorder.length; i++) {
            inorderIndex.set(inorder[i], i);
        }

        let preorderIndex = 0;

        return buildSubtree(0, inorder.length - 1);

        function buildSubtree(inorderLeft: number, inorderRight: number): TreeNode | null {
            if (inorderLeft > inorderRight) return null;

            const rootValue = preorder[preorderIndex++];
            const root = new TreeNode(rootValue);

            const rootIndex = inorderIndex.get(rootValue)!;

            root.left = buildSubtree(inorderLeft, rootIndex - 1);
            root.right = buildSubtree(rootIndex + 1, inorderRight);

            return root;
        }
    }
}
