class TrieNode {
    children = new Array(26);
    isWord = false;
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const code = word.charCodeAt(i) - 97;

            if (!node.children[code]) {
                node.children[code] = new TrieNode();
            }

            node = node.children[code];
        }

        node.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return dfs(this.root, 0);

        function dfs(node: TrieNode, i: number): boolean {
            let curr = node;

            for (; i < word.length; i++) {
                if (word[i] === ".") {
                    for (let idx = 0; idx < 26; idx++) {
                        if (curr.children[idx]) {
                            if (dfs(curr.children[idx], i + 1)) return true;
                        }
                    }
                    return false;
                } else {
                    const code = word.charCodeAt(i) - 97;

                    if (!curr.children[code]) return false;

                    curr = curr.children[code];
                }
            }

            return curr.isWord;
        }
    }
}
