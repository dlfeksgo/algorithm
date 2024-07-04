// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

export function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    const nextPrice = prices[i + 1];
    const todayPrice = prices[i];
    if (nextPrice - todayPrice > 0) {
      profit += nextPrice - todayPrice;
    }
  }
  return profit;
}

console.log(maxProfit([1, 4, 2, 7]));
