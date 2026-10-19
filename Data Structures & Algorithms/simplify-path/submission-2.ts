class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path: string): string {
        const len = path.length;
        const simplifiedPath: string[] = [];

        let i = 0;
        while (i < len) {
            while (i < len && path[i] === "/") i++;

            const start = i;
            while (i < len && path[i] !== "/") i++;

            const fileName = path.slice(start, i);

            if (fileName === "..") simplifiedPath.length && simplifiedPath.pop();
            else if (fileName && fileName !== ".") simplifiedPath.push(fileName);
        }

        return `/${simplifiedPath.join("/")}`;
    }
}
