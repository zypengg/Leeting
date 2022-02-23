/*
5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/



// loop through first had of string
// use each char as a center
// expand left and right until a non matching char is found or a boundry is found


/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let result = '';

    // 121

    // return the palindrome
    const expandAroundCenter = (left, right) => {
        while (left > 0 && right < s.length && s.charAt(left - 1) === s.charAt(right + 1)) {
            left--;
            right++;
        }

        return s.substring(left, right + 1);
    };

    for (let i = 0; i <= s.length; i++) {
        console.log('=====');

        const palindromeA = expandAroundCenter(i, i); // center is a char
        const palindromeB = s.charAt(i) === s.charAt(i + 1) ? expandAroundCenter(i, i + 1) : '';

        console.log("palindromeA: " + palindromeA);
        console.log("palindromeB: " + palindromeB);

        
        console.log("palindromeA length: " + palindromeA.length);
        console.log("palindromeB length: " + palindromeB.length);
        console.log("result length: " + result.length);

        if (palindromeA.length > result.length || palindromeB.length > result.length) {
            result = palindromeA.length > palindromeB.length ? palindromeA : palindromeB;
        }
    }

    console.log(result);
    
    return result;
};


const testCase1 = 'aba';
const testCase2 = 'aaaaaa';
const testCase3 = 'cbbd';
const testCase4 = 'cdad';
const testCase5 = 'cdaad';
const testCase6 = 'eabcb';
longestPalindrome(testCase6);