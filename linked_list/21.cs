/*
21. Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/


/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        ListNode resultHead = null;
        ListNode currentNode = null;

        // add to resultHead
        while (list1 != null || list2 != null)
        {
            ListNode tempNode = null;
            if (list1 != null && list2 != null)
            {
                tempNode = new ListNode(list1.val > list2.val ? list1.val : list2.val);
                if (list1.val > list2.val)
                {
                    list1 = list1.next;
                }
                else
                {
                    list2 = list2.next;
                }
            }
            else if (list1 != null && list2 == null)
            {
                tempNode = new ListNode(list1.val);
                list1 = list1.next;
            }
            else if (list1 == null && list2 != null)
            {
                tempNode = new ListNode(list2.val);
                list2 = list2.next;
            }

            if (resultHead == null) {
                resultHead = tempNode;
                currentNode = tempNode;
            }
            else
            {
                currentNode.next = tempNode;
                currentNode = currentNode.next;
            }
        }

        return resultHead;
    }
}