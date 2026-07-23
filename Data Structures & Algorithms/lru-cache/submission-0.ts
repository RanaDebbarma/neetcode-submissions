class CacheNode {
    key: number;
    value: number;
    prev: CacheNode | null = null;
    next: CacheNode | null = null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    private capacity: number;
    private cache = new Map<number, CacheNode>();
    private head = new CacheNode(0, 0);
    private tail = new CacheNode(0, 0);

    constructor(capacity: number) {
        this.capacity = capacity;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    private remove(node: CacheNode) {
        const prevNode = node.prev!;
        const nextNode = node.next!;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    private addToTail(node: CacheNode) {
        const mruNode = this.tail.prev!;
        mruNode.next = node;
        node.prev = mruNode;
        node.next = this.tail;
        this.tail.prev = node;
    }

    get(key: number): number {
        const node = this.cache.get(key)!;

        if (!node) return -1;

        this.remove(node);
        this.addToTail(node);

        return node.value;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key)!);
        }

        const newNode = new CacheNode(key, value);
        this.cache.set(key, newNode);
        this.addToTail(newNode);

        if (this.cache.size > this.capacity) {
            const lruNode = this.head.next!;
            this.remove(lruNode);
            this.cache.delete(lruNode.key);
        }
    }
}
