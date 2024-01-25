//https://school.programmers.co.kr/learn/courses/30/lessons/17680

export function solution(cacheSize: number, cities: string[]) {
    if (!cacheSize) return cities.length * 5;
    let time = 0;
    let cache: string[] = [];
    for (const v of cities) {
        const capital = v.toUpperCase();
        const idx = cache.indexOf(capital);
        if (idx > -1) {
            cache.splice(idx, 1);
            time += 1;
        } else {
            if (cache.length >= cacheSize) cache.shift();
            time += 5;
        }
        cache.push(capital);
    }
    return time;
}
