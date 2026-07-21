// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (!head) return null;

        const hash = new Map<Node, Node>();

        let curr: Node | null = head;
        while (curr) {
            const copied_node = new Node(curr.val);
            hash.set(curr, copied_node);
            curr = curr.next;
        }

        curr = head;
        while (curr) {
            const copied_node = hash.get(curr)!;
            copied_node.next = hash.get(curr.next!) ?? null;
            copied_node.random = hash.get(curr.random!) ?? null;
            curr = curr.next;
        }

        return hash.get(head) ?? null;
    }
}
