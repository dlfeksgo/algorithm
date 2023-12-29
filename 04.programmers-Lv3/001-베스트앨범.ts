//https://school.programmers.co.kr/learn/courses/30/lessons/42579

export function solution(genres: string[], plays: number[]) {
    const albums = [];
    const map = new Map();
    const answer: number[] = [];

    for (const [id, play] of plays.entries()) {
        const genre = genres[id];
        const sum = (map.get(genre) ?? 0) + play;
        map.set(genre, sum);
        albums.push({
            id,
            genre,
            play,
        });
    }

    const mapToArr = [...map].sort((a, b) => b[1] - a[1]);
    const sortedAlbums = albums.sort((a, b) => b.play - a.play);

    for (const [targetGenre] of mapToArr) {
        let count = 0;
        for (const { id, genre } of sortedAlbums) {
            if (targetGenre === genre) {
                count++;
                if (count <= 2) answer.push(id);
            }
        }
    }
    return answer;
}
