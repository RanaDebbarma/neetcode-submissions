/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        if (!head) return null;

        let node = head;
        for (let i = 0; i < k; i++) {
            if (!node) return head;
            node = node.next;
        }

        let prev = null;
        let curr = head;

        for (let i = 0; i < k; i++) {
            const next = curr.next!;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        head.next = this.reverseKGroup(curr, k);

        return prev;
    }
}
