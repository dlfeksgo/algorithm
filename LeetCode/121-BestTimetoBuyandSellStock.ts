//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

export function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = Number.MIN_SAFE_INTEGER;

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
