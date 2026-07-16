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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let size = 0;
        let curr = head;
        while (curr) {
            curr = curr.next;
            size++;
        }

        if (size - n === 0) {
            return head ? head.next : null;
        }

        let i = 0;
        curr = head;
        let prev = null;
        while (i < size - n) {
            prev = curr;
            curr = curr!.next;
            i++;
        }

        if (prev && curr) {
            prev.next = curr.next;
        }

        return head;
    }
}
