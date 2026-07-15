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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        // skip reordering for 0,1,2 nodes
        if (!head || !head.next || !head.next.next) return;

        let slow: ListNode = head;
        let fast: ListNode | null = head;

        // Find middle
        while (fast && fast.next) {
            slow = slow.next!;
            fast = fast.next.next;
        }

        let second: ListNode | null = slow.next;
        slow.next = null; // split the second half

        // Reverse second half
        let prev: ListNode | null = null;
        while (second) {
            const nextTemp: ListNode | null = second.next;
            second.next = prev;
            prev = second;
            second = nextTemp;
        }

        let first: ListNode | null = head;
        second = prev;

        // interleave two halves
        while (second) {
            const firstNext: ListNode | null = first!.next;
            const secondNext: ListNode | null = second.next;

            first!.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }
}
