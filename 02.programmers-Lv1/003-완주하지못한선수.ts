//https://school.programmers.co.kr/learn/courses/30/lessons/42576

export function solution(participant: string[], completion: string[]) {
    const map = new Map();

    for (const person of participant) {
        const value = (map.get(person) ?? 0) + 1;
        map.set(person, value);
    }

    for (const person of completion) {
        map.set(person, map.get(person) - 1);
    }

    for (const [person, isCompleted] of map.entries()) {
        if (isCompleted) return person;
    }
}

//Object로 구현
// type Participant = {
//   [key: string]: number;
// };

// function solution(participant: string[], completion: string[]) {
//   const participants: Participant = {};

//   for (const person of participant) {
//       if (!participants[person]) participants[person] = 1;
//       else participants[person] += 1;
//   }

//   for (const person of completion) {
//       participants[person] -= 1;
//   }

//   for (const person in participants) {
//       if (participants[person] > 0) return person;
//   }
// }
