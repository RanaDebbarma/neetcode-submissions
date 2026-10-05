class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const preReqMap = new Map<number, number[]>();

        for (const [prereq, course] of prerequisites) {
            if (!preReqMap.has(course)) {
                preReqMap.set(course, []);
            }
            preReqMap.get(course)!.push(prereq);
        }

        // 0 = unvisited, 1 = visiting, 2 = processed
        const state = new Int32Array(numCourses);

        for (let course = 0; course < numCourses; course++) {
            if (state[course] === 0 && !hasCycle(course)) return false;
        }

        return true;

        function hasCycle(node: number) {
            if (state[node] === 1) return false;
            if (state[node] === 2) return true;

            state[node] = 1;

            for (const prereq of preReqMap.get(node) ?? []) {
                if (!hasCycle(prereq)) return false;
            }

            state[node] = 2;

            return true;
        }
    }
}
