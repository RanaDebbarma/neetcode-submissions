class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const que = [0];
        const visited = new Set<number>([0]);
        let head = 0;

        let numberOfCoins = 0;

        while (head < que.length) {
            const lvlSize = que.length - head;

            for (let lvl = 0; lvl < lvlSize; lvl++) {
                const currAmt = que[head++];

                if (currAmt === amount) return numberOfCoins;

                for (const coin of coins) {
                    const nextAmt = currAmt + coin;

                    if (nextAmt > amount || visited.has(nextAmt)) continue;

                    visited.add(nextAmt);
                    que.push(currAmt + coin);
                }
            }

            numberOfCoins++;
        }

        return -1;
    }
}
