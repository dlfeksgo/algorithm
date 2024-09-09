## 문제 링크

[LeetCode/Easy/Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)

## 성능

- Runtime: 73ms
- Memory: 53.63

## 복잡도

- 시간복잡도: O(n)
- 공간복잡도: O(1)

## 풀이 방향

- Algorithm: fast and slow pointers
- 연결 리스트에서 순환 여부 확인
- slow pointer: 한 칸씩 이동
- fast pointer: 두 칸씩 이동
- 순환이 있다면 2개의 포인터는 만나게 된다.

## 회고

- while문 조건 설정에서 시간 소요가 큼
- 순환이 없을 경우에 fast pointer는 리스트 끝까지 도달하여 null이 나온다는 조건을 활용하지 못함
