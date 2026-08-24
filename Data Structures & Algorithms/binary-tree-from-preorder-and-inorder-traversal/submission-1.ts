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
        const inorderMap = new Map<number, number>();
        for (let idx = 0; idx < inorder.length; idx++) {
            inorderMap.set(inorder[idx], idx);
        }

        return helper(0, 0, inorder.length - 1);

        function helper(preStart: number, inStart: number, inEnd: number): TreeNode | null {
            if (inStart > inEnd) return null;

            const rootVal = preorder[preStart];
            const root = new TreeNode(rootVal);

            const mid = inorderMap.get(rootVal)!;
            const leftSize = mid - inStart;

            root.left = helper(preStart + 1, inStart, mid - 1);
            root.right = helper(preStart + leftSize + 1, mid + 1, inEnd);

            return root;
        }
    }
}
