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
        if (cityIdx > -1) {
            cache.splice(cityIdx, 1);
            time += HIT_TIME;
        } else {
            if (cache.length >= cacheSize) cache.shift();
            time += MISS_TIME;
        }
        cache.push(city);
    }
    return time;
}
