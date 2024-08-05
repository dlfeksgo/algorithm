// https://leetcode.com/problems/h-index/description/

// 접근
// 내림차순 정렬

// 시간 소요 원인: 문제 해석

export function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a);
  let count = 0;

  for (const [i, citation] of citations.entries()) {
    if (citation >= i + 1) {
      count++;
    } else break;
  }

  return count;
}
