//https://leetcode.com/problems/product-of-array-except-self/description/

export function productExceptSelf(nums: number[]): number[] {
    let n = nums.length;
    let result: number[] = new Array(n).fill(1);

    let prefix = 1;
    let suffix = 1;

    for (const i of nums.keys()) {
        result[i] *= prefix;
        result[n - 1 - i] *= suffix;

        prefix *= nums[i];
        suffix *= nums[n - 1 - i];
    }

    return result;
}
