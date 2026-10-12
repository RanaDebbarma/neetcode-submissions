class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */

    ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
        const wordSet = new Set(wordList);

        if (!wordSet.has(endWord)) return 0;

        const queue: string[] = [beginWord];
        const visited = new Set<string>([beginWord]);

        let head = 0;
        let transformations = 1;

        while (head < queue.length) {
            const levelSize = queue.length - head;

            for (let level = 0; level < levelSize; level++) {
                const currentWord = queue[head++];

                if (currentWord === endWord) return transformations;

                for (const nextWord of nextPossibleWords(currentWord)) {
                    if (visited.has(nextWord)) continue;

                    visited.add(nextWord);
                    queue.push(nextWord);
                }
            }

            transformations++;
        }

        return 0;

        function nextPossibleWords(word: string): string[] {
            const neighbors: string[] = [];
            const characters = word.split("");

            for (let i = 0; i < characters.length; i++) {
                const originalChar = characters[i];

                for (let charCode = 97; charCode <= 122; charCode++) {
                    const replacementChar = String.fromCharCode(charCode);

                    if (replacementChar === originalChar) continue;

                    characters[i] = replacementChar;
                    const candidate = characters.join("");

                    if (wordSet.has(candidate) && !visited.has(candidate)) {
                        neighbors.push(candidate);
                    }
                }

                characters[i] = originalChar;
            }

            return neighbors;
        }
    }
}
