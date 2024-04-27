//https://leetcode.com/problems/maximum-product-subarray/

export function maxProduct(nums: number[]): number {
    let prefix = 1;
    let suffix = 1;
    let max = Number.MIN_SAFE_INTEGER;

    for (const i of nums.keys()) {
        if (!prefix) prefix = 1;
        if (!suffix) suffix = 1;

        prefix = prefix * nums[i];
        suffix = suffix * nums[nums.length - i - 1];
        max = Math.max(max, prefix, suffix);
    }

    return max;
}
