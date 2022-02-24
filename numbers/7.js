/*
7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

// assume limit is 222
// 322
// 22 = 22
// 3 > 222

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let result = 0;

    let limitHigh = Math.pow(2, 31) - 1;
    let limitLow = - limitHigh - 1;

    const intDiv = num => {
        return num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);
    }

    while (x !== 0) {
        //console.log('-----');
        const currentDigit = x % 10;
        x = intDiv(x);

        if (result > intDiv(limitHigh) || (x === intDiv(limitHigh) && currentDigit > limitHigh % 10)) {
            return 0;
        }
        if (result < intDiv(limitLow) || (x === intDiv(limitLow) && currentDigit < limitLow % 10)) {
            return 0;
        }

        result = result * 10 + currentDigit;
        //console.log(currentDigit);
        //console.log(x);
    }
    return result;
};

// 7463847412
// -8463847412
const test1 = -123;
const test2 = 7463847412;
const test3 = -8463847412;
const test4 = 7463847413;
const test5 = -8463847414;
const test6 = 900000;

console.log(reverse(test6));
