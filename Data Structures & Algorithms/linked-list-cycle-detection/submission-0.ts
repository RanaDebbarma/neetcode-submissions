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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let tail = head;
        const seen = new Set<ListNode>();

        while (tail) {
            if (seen.has(tail)) return true;
            seen.add(tail);
            tail = tail.next;
        }

        return false;
    }
}
