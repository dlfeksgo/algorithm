## 문제 링크

[LeetCode/Medium/Network Delay Time](https://leetcode.com/problems/network-delay-time/)

## 성능

- Runtime: 74ms
- Memory: 56.86mb

## 복잡도

- 시간복잡도: O(VE): V(N)은 노드의 수, E는 간선의 수
- 공간복잡도: O(V)

## 풀이 방향

- Algorithm: Bellman-Ford
- 모든 간선을 반복해서 탐색하면서 최단 거리를 갱신
- 음수 가중치 처리 가능(비용 감소, 최적화 문제 등)

## 회고

- 다익스트라 풀이가 이해하기 어려워 벨만 포드 풀이로 제출
- 다익스트라로 복습 필요
