//https://school.programmers.co.kr/learn/courses/30/lessons/17680

export function solution(cacheSize: number, cities: string[]) {
    const HIT_TIME = 1;
    const MISS_TIME = 5;

    if (!cacheSize) return cities.length * MISS_TIME;

    let time = 0;
    let cache: string[] = [];
    for (const v of cities) {
        const city = v.toUpperCase();
        const cityIdx = cache.indexOf(city);
        const isHit = cityIdx > -1;

        if (isHit) cache.splice(cityIdx, 1);
        if (cache.length >= cacheSize) cache.shift();
        cache.push(city);

        time += isHit ? HIT_TIME : MISS_TIME;
    }
    return time;
}
