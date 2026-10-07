class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    // Kahn's Algorithm (BFS)
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const graph: number[][] = Array.from({ length: numCourses }, () => []);
        const indegree = new Int32Array(numCourses);

        for (const [course, preReq] of prerequisites) {
            graph[preReq].push(course);
            indegree[course]++;
        }

        const order: number[] = [];
        const queue: number[] = [];
        let head = 0;

        for (let course = 0; course < numCourses; course++) {
            if (indegree[course] === 0) queue.push(course);
        }

        while (head < queue.length) {
            const course = queue[head++];
            order.push(course);

            for (const neighbor of graph[course]) {
                indegree[neighbor]--;

                if (indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        return order.length === numCourses ? order : [];
    }
}
