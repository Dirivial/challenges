/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    var head = new ListNode(0, undefined);
    var node = head;

    // Loop until one of the lists are empty
    while(list1 && list2) {
        if(list1.val < list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            list2 = list2.next;
        }
        node = node.next;
    }

    // Append the last non-null node(s) in the non-empty list
    node.next = list1 || list2;

    // The first node is not part of the actual list (has value === 0).
    return head.next;
};

var l1 = new ListNode(1, new ListNode(2, new ListNode(4, undefined)));
var l2 = new ListNode(1, new ListNode(3, new ListNode(4, undefined)));

console.log(mergeTwoLists(l1, l2));