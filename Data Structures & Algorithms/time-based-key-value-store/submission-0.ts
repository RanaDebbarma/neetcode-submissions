class TimeMap {
    private keyStore: Map<string, [number, string][]>;

    constructor() {
        this.keyStore = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        const entries = this.keyStore.get(key);

        if (entries) {
            entries.push([timestamp, value]);
        } else {
            this.keyStore.set(key, [[timestamp, value]]);
        }
    }

    get(key: string, timestamp: number): string {
        const entries = this.keyStore.get(key);
        if (!entries) return "";

        const idx = this.binarySearch(entries, timestamp);
        if (idx === -1) return "";

        return entries[idx][1];
    }

    private binarySearch(arr: [number, string][], target: number): number {
        let ans = -1;
        let l = 0;
        let r = arr.length - 1;

        while (l <= r) {
            const mid = (l + r) >> 1;

            if (arr[mid][0] <= target) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return ans;
    }
}
