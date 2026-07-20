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

        // Step 1: Create interleaved cloned nodes (A -> A' -> B -> B')
        let curr: Node | null = head;
        while (curr) {
            const clone: Node = new Node(curr.val);
            clone.next = curr.next;
            curr.next = clone;
            curr = clone.next;
        }

        // Step 2: Assign random pointers for cloned nodes
        curr = head;
        while (curr) {
            const clone: Node = curr.next!;
            if (curr.random) {
                clone.random = curr.random.next;
            }
            curr = clone.next;
        }

        // Step 3: De-interleave the two lists
        const dummy = new Node(0);
        let cloneTail: Node | null = dummy;
        curr = head;
        while (curr) {
            const clone: Node = curr.next!;
            curr.next = clone.next;

            cloneTail.next = clone;
            cloneTail = clone;

            curr = curr.next;
        }

        return dummy.next;
    }
}
