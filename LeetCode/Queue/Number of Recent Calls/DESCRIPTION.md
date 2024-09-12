## 문제 링크

[LeetCode/Easy/Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/description/)

## 성능

- Runtime: 161ms
- Memory: 61MB

## 복잡도

### 배열

- 시간복잡도: O(1): 삭제의 경우 O(n)이 될 수 있음.
- 공간복잡도: O(n)

### 연결 리스트

- 시간복잡도: O(1)
- 공간복잡도: O(n)

## 풀이 방향

- Algorithm: Queue
- Queue에 값을 넣는다.
- 시간 연산 후 지난 시간은 Queue에서 제거한다.
- 모든 ping이 끝나면 queue의 size를 반환한다.

### 연결 리스트를 이용한 풀이

```typescript
import { Queue } from '../../../templates/Queue&Stack/Queue';

export class RecentCounter {
  private queue: Queue<number>;

  constructor() {
    this.queue = new Queue<number>();
  }

  ping(t: number): number {
    this.queue.enqueue(t);

    while (!this.queue.isEmpty() && this.queue.peek()! < t - 3000) {
      this.queue.dequeue();
    }

    return this.queue.size();
  }
}
```

## 회고

- 배열 풀이가 간단하지만, 삭제로 인한 시간 복잡도 문제가 생기면 연결 리스트 로직을 활용해야 한다.
