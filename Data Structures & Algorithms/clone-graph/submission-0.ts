/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        if (!node) return node;

        const clones = new Map<Node, Node>();
        const stack: Node[] = [node];

        clones.set(node, new Node(node.val));

        while (stack.length) {
            const currNode = stack.pop()!;
            const cloneNode = clones.get(currNode);

            for (const neighbor of currNode.neighbors) {
                if (!clones.has(neighbor)) {
                    clones.set(neighbor, new Node(neighbor.val));
                    stack.push(neighbor);
                }

                cloneNode.neighbors.push(clones.get(neighbor));
            }
        }

        return clones.get(node)!;
    }
}
