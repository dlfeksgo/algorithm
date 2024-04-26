//https://leetcode.com/problems/maximum-subarray/description/

export function maxSubArray(nums: number[]): number {
    let maxSum = 0;
    let sum = Number.MIN_SAFE_INTEGER;

    for (const num of nums) {
        maxSum = Math.max(num, maxSum + num);
        if (maxSum > sum) sum = maxSum;
    }

    return sum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
