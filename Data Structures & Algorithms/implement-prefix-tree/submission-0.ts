class TrieNode {
    children = new Array(26).fill(null);
    isWord = false;
}

class PrefixTree {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const idx = word.charCodeAt(i) - 97;

            if (!node.children[idx]) {
                node.children[idx] = new TrieNode();
            }

            node = node.children[idx];
        }

        node.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const idx = word.charCodeAt(i) - 97;

            if (!node.children[idx]) return false;

            node = node.children[idx];
        }

        return node.isWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let node = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const idx = prefix.charCodeAt(i) - 97;

            if (!node.children[idx]) return false;

            node = node.children[idx];
        }

        return true;
    }
}
