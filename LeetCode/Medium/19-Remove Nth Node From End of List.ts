// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyHead = new ListNode(0, head);

  let length = 0;
  let node = dummyHead;
  while (node !== null) {
    node = node.next!;
    length++;
  }

  let prev: ListNode | null = dummyHead;
  let curr: ListNode | null = dummyHead.next;
  // 제거할 노드 직전에 순회 종료
  for (let i = 0; i < length - n - 1; i++) {
    prev = curr;
    curr = curr!.next;
  }
  prev!.next = curr ? curr.next : null;
  return dummyHead.next;
}

removeNthFromEnd(new ListNode(1), 2);
