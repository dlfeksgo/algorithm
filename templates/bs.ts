type BsType = (
    sortedList: number[],
    target: number,
    low: number,
    high: number,
    comparator: (mid: number, target: number) => number,
) => number;

export const binarySearch: BsType = (
    sortedList,
    target,
    low,
    high,
    comparator,
) => {
    const mid = Math.floor((low + high) / 2);
    if (low > high) return mid;

    const result = comparator(mid, target);

    if (result >= 0) {
        return binarySearch(sortedList, target, mid + 1, high, comparator);
    } else return binarySearch(sortedList, target, low, mid - 1, comparator);
};

// export const binarySearch = (
//     arr: number[],
//     target: number,
//     low: number,
//     high: number,
// ): number => {
//     if (low > high) return -1;
//     const mid = Math.floor((low + high) / 2);
//     if (arr[mid] === target) return mid;
//     else if (arr[mid] > target)
//         return binarySearch(arr, target, low, mid - 1);
//     else return binarySearch(arr, target, mid + 1, high);
// };

export const lowerBound = (
    arr: number[],
    target: number,
    low: number,
    high: number,
) => {
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= target) high = mid;
        else low = mid + 1;
    }
    return high;
};

export const upperBound = (
    arr: number[],
    target: number,
    low: number,
    high: number,
) => {
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > target) high = mid;
        else low = mid + 1;
    }
    return high;
};

export const countByRange = (
    arr: number[],
    lowValue: number,
    highValue: number,
) => {
    const highIndex = upperBound(arr, highValue, 0, arr.length);
    const lowIndex = lowerBound(arr, lowValue, 0, arr.length);
    return highIndex - lowIndex;
};
