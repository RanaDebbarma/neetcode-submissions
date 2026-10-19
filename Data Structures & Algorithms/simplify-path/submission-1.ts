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
            let fileName = "";

            while (i < len && path[i] === "/") i++;
            while (i < len && path[i] !== "/") fileName += path[i++];

            if (fileName === "..") simplifiedPath.length && simplifiedPath.pop();
            else if (fileName && fileName !== ".") simplifiedPath.push(fileName);
        }

        return `/${simplifiedPath.join("/")}`;
    }
}
