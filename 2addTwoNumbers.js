
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(0, undefined);
    var node = head.next;
    var rest = 0;

    while(l1 && l2) {
        node.val = l1.val + l2.val + rest;
        if(node.val > 9) {
            rest = 1;
        }
        l1 = l1.next;
        l2 = l2.next;
        node.next = new Listnode(0, undefined);

        rest = 0;
    }
};