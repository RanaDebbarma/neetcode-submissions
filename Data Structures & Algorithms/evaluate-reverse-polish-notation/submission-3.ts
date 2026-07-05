class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for (const token of tokens) {
            const num = Number(token);

            if (Number.isNaN(num)) {
                const right = stack.pop()!;
                const left = stack.pop()!;

                switch (token) {
                    case "+":
                        stack.push(left + right);
                        break;
                    case "-":
                        stack.push(left - right);
                        break;
                    case "*":
                        stack.push(left * right);
                        break;
                    case "/":
                        stack.push(Math.trunc(left / right));
                        break;
                }
            } else {
                stack.push(num);
            }
        }
        return stack.pop()!;
    }
}
