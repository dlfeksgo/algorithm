//https://school.programmers.co.kr/learn/courses/30/lessons/12948

export function solution(phone_number: string) {
    //padStart, padEnd의 첫 번째 인자는 완성하려는 전체 글자수
    return phone_number.slice(-4).padStart(phone_number.length, '*');
}

//01 - 첫 풀이
// return Array(phone_number.length - 4)
//     .fill('*')
//     .concat(phone_number.split('').splice(-4))
//     .join('');

//02 - 다른 사람 풀이
// return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
