// https://leetcode.com/problems/reverse-linked-list/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseList2(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;

  while (head) {
    prev = new ListNode(head.val, prev);
    head = head.next;
  }

  return prev;
}

// 다른 풀이
// export function reverseList(head: ListNode | null): ListNode | null {
//   let prev = null;

//   while (head) {
//     let next = head.next;

//     head.next = prev;

//     prev = head;
//     head = next;
//   }

//   return prev;
// }
