class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function hasCycle(head: ListNode | null): boolean {
  let slowPointer = head;
  let fastPointer = head;

  if (!fastPointer || !fastPointer.next) return false;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer!.next; // slowPointer는 한 칸 이동
    fastPointer = fastPointer.next.next; // fastPointer는 두 칸 이동

    if (slowPointer === fastPointer) {
      return true; // 두 포인터가 만난 경우, 순환이 있음
    }
  }
  return false;
}
