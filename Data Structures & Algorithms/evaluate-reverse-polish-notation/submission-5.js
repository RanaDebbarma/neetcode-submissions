class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = new Set(["+", "-", "*", "/"]);

        for (const token of tokens) {
            if (operators.has(token)) {
                const right = stack.pop();
                const left = stack.pop();

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
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}
