export const binarySearch = (
    arr: number[],
    target: number,
    start: number,
    end: number,
): number => {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target)
        return binarySearch(arr, target, start, mid - 1);
    else return binarySearch(arr, target, mid + 1, end);
};

export const lowerBound = (
    arr: number[],
    target: number,
    start: number,
    end: number,
) => {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
};

export const upperBound = (
    arr: number[],
    target: number,
    start: number,
    end: number,
) => {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > target) end = mid;
        else start = mid + 1;
    }
    return end;
};

export const countByRange = (
    arr: number[],
    leftValue: number,
    rightValue: number,
) => {
    const rightIndex = upperBound(arr, rightValue, 0, arr.length);
    const leftIndex = lowerBound(arr, leftValue, 0, arr.length);
    return rightIndex - leftIndex;
};
