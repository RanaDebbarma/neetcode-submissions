class MyHashSet {
    container: Set<number>;

    constructor() {
        this.container = new Set();
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        this.container.add(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        this.container.delete(key);
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        return this.container.has(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
