//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

//0(log n) 시간복잡도로 최솟값을 찾기 위해서는 이분탐색이 필요하다.
//Math.min 은 O(n)이다.

export function findMin(nums: number[]): number {
    let lowIdx = 0;
    let highIdx = nums.length - 1;

    while (lowIdx < highIdx) {
        //배열의 중간 인덱스 찾기
        let mid = Math.floor((lowIdx + highIdx) / 2);
        //중간값이 마지막값보다 크면 탐색 범위를 오른쪽으로 이동
        if (nums[mid] > nums[nums.length - 1]) lowIdx = mid + 1;
        //중간값이 마지막값보다 작으면 탐색 범위를 왼쪽으로 좁혀서 작은 값 찾기
        else highIdx = mid;
    }
    return nums[lowIdx];
}
