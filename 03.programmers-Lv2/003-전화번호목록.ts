//https://school.programmers.co.kr/learn/courses/30/lessons/42577

export function solution(phone_book: string[]) {
    phone_book.sort();
    const isPrefix = phone_book.some(
        (num, idx) => phone_book[idx + 1]?.startsWith(num),
    );
    return !isPrefix;
}
