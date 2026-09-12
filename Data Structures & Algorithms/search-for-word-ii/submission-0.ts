class TrieNode {
    children: (TrieNode | undefined)[] = new Array(26);
    word: string | null = null;

    insert(word: string) {
        let node: TrieNode = this;

        for (let i = 0; i < word.length; i++) {
            const code = word.charCodeAt(i) - 97;

            if (!node.children[code]) {
                node.children[code] = new TrieNode();
            }

            node = node.children[code];
        }

        node.word = word;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */

    findWords(board: string[][], words: string[]): string[] {
        const root = new TrieNode();
        const res: string[] = [];

        // build prefix tree
        for (const word of words) {
            root.insert(word);
        }

        const ROWS = board.length;
        const COLS = board[0].length;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, root);
            }
        }

        return res;

        function dfs(r: number, c: number, node: TrieNode) {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;

            const char = board[r][c];

            // return if visited;
            if (char === "#") return;

            const idx = char.charCodeAt(0) - 97;
            const next = node.children[idx];

            if (!next) return;

            if (next.word !== null) {
                res.push(next.word);
                next.word = null; // prevent duplicate
            }

            // mark visited;
            board[r][c] = "#";

            dfs(r - 1, c, next);
            dfs(r + 1, c, next);
            dfs(r, c - 1, next);
            dfs(r, c + 1, next);

            // reset board
            board[r][c] = char;
        }
    }
}
