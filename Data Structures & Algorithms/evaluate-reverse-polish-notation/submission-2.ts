class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operators = new Set<string>(["+", "-", "*", "/"]);
        const stack: number[] = [];

        for (const ch of tokens) {
            if (!operators.has(ch)) {
                stack.push(Number(ch));
            } else {
                const val1 = stack.pop()!;
                const val2 = stack.pop()!;

                switch (ch) {
                    case "+":
                        stack.push(val2 + val1);
                        break;
                    case "-":
                        stack.push(val2 - val1);
                        break;
                    case "*":
                        stack.push(val2 * val1);
                        break;
                    case "/":
                        stack.push(Math.trunc(val2 / val1));
                        break;
                }
            }
        }
        return stack[0];
    }
}
