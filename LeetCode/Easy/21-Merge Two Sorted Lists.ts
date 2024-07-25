// https://leetcode.com/problems/merge-two-sorted-lists/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // 더미 노드: 병합된 리스트의 시작점을 가리키는 포인터 역할
  let dummy = new ListNode();
  // current 포인터가 처음에는 dummy를 가리킴
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    // current.next가 더 작은 값을 가진 노드를 가리키도록 설정
    if (list1.val <= list2.val) {
      current.next = list1;
      // list1은 이제 list1.next를 가리킴
      list1 = list1.next;
    } else {
      current.next = list2;
      // list2는 이제 list2.next를 가리킴
      list2 = list2.next;
    }
    // current를 연결해준 뒤에 current 포인터를 다음 노드로 이동
    // current는 최종적으로 마지막 노드를 가리키게 됨
    current = current.next;
  }

  // current.next에 남아있는 리스트를 연결
  current.next = list1 !== null ? list1 : list2;

  // 더미 노드의 다음 노드를 반환하여 병합된 리스트의 시작점을 반환
  return dummy.next;
}

// function mergeTwoLists(list1: ListNodeTest | null, list2: ListNodeTest | null): ListNodeTest | null {
//   if (list1 === null) {
//       return list2;
//   }
//   if (list2 === null) {
//       return list1;
//   }

//   if (list1.val < list2.val) {
//       list1.next = mergeTwoLists(list1.next, list2);
//       return list1;
//   } else {
//       list2.next = mergeTwoLists(list1, list2.next);
//       return list2;
//   }
// };
