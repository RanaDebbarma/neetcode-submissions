class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const order: number[] = [];
        const preReqMap = new Map<number, number[]>();

        for (const [course, preReq] of prerequisites) {
            if (!preReqMap.has(course)) {
                preReqMap.set(course, []);
            }
            preReqMap.get(course)!.push(preReq);
        }

        // 0 = unvisited, 1 = visiting, 2 = processed
        const state = new Int32Array(numCourses);

        for (let course = 0; course < numCourses; course++) {
            if (!dfs(course)) return [];
        }

        return order;

        function dfs(course: number): boolean {
            if (state[course] === 1) return false;
            if (state[course] === 2) return true;

            state[course] = 1;

            for (const preReq of preReqMap.get(course) ?? []) {
                if (!dfs(preReq)) return false;
            }

            state[course] = 2;
            order.push(course);
            return true;
        }
    }
}
