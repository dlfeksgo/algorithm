//https://school.programmers.co.kr/learn/courses/30/lessons/181926

export function solution(n: number, control: string) {
    for (const str of control) {
        switch (str) {
            case 'w':
                n += 1;
                break;
            case 's':
                n -= 1;
                break;
            case 'd':
                n += 10;
                break;
            case 'a':
                n -= 10;
                break;
            default:
                return n;
        }
    }
    return n;
}
