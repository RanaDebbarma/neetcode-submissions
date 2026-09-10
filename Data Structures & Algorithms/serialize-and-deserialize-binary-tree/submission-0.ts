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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        const arr: (number | null)[] = [];

        dfs(root);

        return JSON.stringify(arr);

        function dfs(node: TreeNode | null) {
            if (!node) {
                arr.push(null);
                return;
            }

            arr.push(node.val);

            dfs(node.left);
            dfs(node.right);
        }
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        const arr = JSON.parse(data);
        let i = 0;

        return build();

        function build(): TreeNode | null {
            const val = arr[i];
            i++;

            if (val === null) return null;

            const node = new TreeNode(val);

            node.left = build();
            node.right = build();

            return node;
        }
    }
}
