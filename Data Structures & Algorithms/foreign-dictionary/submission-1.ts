class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words: string[]): string {
        const len = words.length;
        const graph = new Map<string, Set<string>>();
        const indegree = new Int32Array(26);

        for (const word of words) {
            for (const ch of word) {
                if (graph.has(ch)) continue;
                graph.set(ch, new Set());
            }
        }

        for (let i = 0; i < len - 1; i++) {
            const word1 = words[i];
            const word2 = words[i + 1];

            let p = 0;
            let samePrefix = true;
            while (p < word1.length && p < word2.length) {
                const ch1 = word1[p];
                const ch2 = word2[p];
                p++;

                if (ch1 !== ch2) {
                    samePrefix = false;
                    const neighbor = graph.get(ch1)!;

                    if (!neighbor.has(ch2)) {
                        neighbor.add(ch2);
                        indegree[ch2.charCodeAt(0) - 97]++;
                    }

                    break;
                }
            }

            if (word1.length > word2.length && samePrefix) return "";
        }

        // topo-sort
        const order: string[] = [];
        const queue: string[] = [];
        let head = 0;

        for (const ch of graph.keys()) {
            if (indegree[ch.charCodeAt(0) - 97] === 0) queue.push(ch);
        }

        while (head < queue.length) {
            const ch = queue[head++];
            order.push(ch);

            for (const next of graph.get(ch) ?? []) {
                const idx = next.charCodeAt(0) - 97;
                indegree[idx]--;

                if (indegree[idx] === 0) queue.push(next);
            }
        }

        return order.length === graph.size ? order.join("") : "";
    }
}
