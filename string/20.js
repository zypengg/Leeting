/*

20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let stack = [];

	const peek = (stk) => {
		return stk[stk.length - 1];
	};

	for (let i = 0; i < s.length; i++) {
		const current = s.charAt(i);
		if (current === "(" || current === "{" || current === "[") {
			stack.push(s.charAt[i]);
		} else {
			const last = peek(stack);
			if (
				(last === "(" && current === ")") ||
				(last === "{" && current === "}") ||
				(last === "[" && current === "]")
			) {
				stack.pop;
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
};

const test1 = "()";

isValid(test1);
