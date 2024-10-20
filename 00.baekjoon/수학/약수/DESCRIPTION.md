## 문제 링크

[Baekjoon/1037](https://www.acmicpc.net/problem/1037)

## 성능

- Runtime: 100ms
- Memory: 9596kb

## 복잡도

- 시간복잡도: O(n)
- 공간복잡도: O(1)

## 풀이 방향

- 약수를 이용해 배수 찾기
- 예외 조건 처리 후 가장 작은 값과 가장 큰 값의 곱 반환

## 다픈 풀이

- Math.min과 Math.max는 배열을 모두 순회하므로 2번 순회하게 된다.
- 같은 O(n)이지만 배열의 크기가 커질수록 느릴 수 있다.

```typescript
const DIVISORS = divisor.split(' ').map(Number);
let N: number;

if (DIVISORS.length === 1 && DIVISORS[0] !== 1) {
  N = DIVISORS[0] ** 2;
} else {
  let minDivisor = Number.MAX_SAFE_INTEGER;
  let maxDivisor = Number.MIN_SAFE_INTEGER;
  for (const NUM of DIVISORS) {
    minDivisor = minDivisor > NUM ? NUM : minDivisor;
    maxDivisor = maxDivisor < NUM ? NUM : maxDivisor;
  }
  N = minDivisor * maxDivisor;
}

console.log(N);
```
