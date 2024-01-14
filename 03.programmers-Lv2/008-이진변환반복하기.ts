//https://school.programmers.co.kr/learn/courses/30/lessons/70129

export function solution(s: string) {
    let [i, cnt] = [0, 0];
    while (s !== '1') {
        i++;
        const filteredArr = s
            .split('')
            .filter((v) => v !== '0')
            .join('');
        cnt += s.length - filteredArr.length;
        s = Number(filteredArr.length).toString(2);
    }
    return [i, cnt];
}

//s.length > 1
