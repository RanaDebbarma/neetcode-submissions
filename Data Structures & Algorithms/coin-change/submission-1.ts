class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const dp = Array(amount + 1).fill(Infinity);

        dp[0] = 0;

        for (let amt = 1; amt <= amount; amt++) {
            for (const coin of coins) {
                if (amt < coin) continue;
                dp[amt] = Math.min(dp[amt], dp[amt - coin] + 1);
            }
        }

        return dp[amount] !== Infinity ? dp[amount] : -1;
    }
}
