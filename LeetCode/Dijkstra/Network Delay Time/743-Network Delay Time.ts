export function networkDelayTime(times: number[][], N: number, K: number): number {
  const dist = new Array(N + 1).fill(Infinity);
  dist[0] = 0;
  dist[K] = 0;

  let flag = true;

  while (flag) {
    flag = false;
    times.forEach(([u, v, w]) => {
      if (dist[u] !== Infinity && dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;
        flag = true;
      }
    });
  }

  const res = Math.max(...dist);

  return res === Infinity ? -1 : res;
}
