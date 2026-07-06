class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;

        let buy = 0;
        let sell = 1;

        while (sell < prices.length) {
            if (prices[buy] >= prices[sell]) {
                buy = sell;
                sell = buy + 1;
            } else {
                const diff = prices[sell] - prices[buy];
                if (diff > max) max = diff;
                sell++;
            }
        }

        return max;
    }
}
