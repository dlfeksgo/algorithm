//https://leetcode.com/problems/two-sum/

export function twoSum(nums: number[], target: number): number[] {
    const idxMap: Map<number, number> = new Map();
    for (const [i, v] of nums.entries()) {
        const diff = target - v;
        if (idxMap.has(diff)) {
            return [idxMap.get(diff)!, i];
        }
        idxMap.set(v, i);
    }
    return [];
}
