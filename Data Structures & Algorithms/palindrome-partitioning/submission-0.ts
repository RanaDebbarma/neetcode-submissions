class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const partitions: string[][] = [];

        backtrack(0, []);

        return partitions;

        function backtrack(start: number, palindromes: string[]) {
            if (start === s.length) {
                partitions.push([...palindromes]);
                return;
            }

            for (let end = start; end < s.length; end++) {
                if (!isPalindrome(start, end)) continue;

                palindromes.push(s.substring(start, end + 1));
                backtrack(end + 1, palindromes);
                palindromes.pop();
            }
        }

        function isPalindrome(l: number, r: number): boolean {
            while (l < r) {
                if (s[l] !== s[r]) return false;
                l++;
                r--;
            }

            return true;
        }
    }
}
