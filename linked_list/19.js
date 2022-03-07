/*
19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	// left & right ptr where the offset is exactly
	let left = head;
	let right = head;
	let previousNode = null;

	// make it so that offset between left & right is n
	while (n > 0 && right !== null) {
		n--;

		right = right.next;
	}

	if (right === null) {
		return head.next;
	}

	// move all ptr until right hits null/undefined
	while (right !== null) {
		previousNode = left;
		left = left.next;
		right = right.next;
	}

	previousNode.next = left.next;

	return head;
};

removeNthFromEnd([1, 2, 3, 4, 5], 2);
