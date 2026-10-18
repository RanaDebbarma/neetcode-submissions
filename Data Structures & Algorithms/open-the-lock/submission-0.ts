class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends: string[], target: string): number {
        const deadendsSet = new Set(deadends);

        if (deadendsSet.has("0000")) return -1;
        if (target === "0000") return 0;

        const visited = new Set<string>(["0000"]);

        const queue: string[] = ["0000"];
        let head = 0;
        let turns = -1;

        while (head < queue.length) {
            const lvlSize = queue.length - head;
            turns++;

            for (let lvl = 0; lvl < lvlSize; lvl++) {
                const combination = queue[head++];

                if (combination === target) return turns;

                for (const next of nextCombinations(combination)) {
                    if (visited.has(next) || deadendsSet.has(next)) continue;

                    visited.add(next);
                    queue.push(next);
                }
            }
        }

        return -1;

        function nextCombinations(combination: string): string[] {
            const next: string[] = [];

            for (let i = 0; i < 4; i++) {
                const comb = [...combination];
                const num = Number(comb[i]);

                // backwards
                comb[i] = num === 0 ? "9" : String(num - 1);
                next.push(comb.join(""));

                // forwards
                comb[i] = num === 9 ? "0" : String(num + 1);
                next.push(comb.join(""));
            }

            return next;
        }
    }
}
