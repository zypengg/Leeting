/*
10. Regular Expression Matching

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
 

Constraints:

1 <= s.length <= 20
1 <= p.length <= 30
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

god why this question why (;´ Ⱉ `; ) 
*/


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    //console.log('s: ' + s + ' p: ' + p);

    if (p.length === 0) return s.length === 0;
    
    // if s is empty, only valid case left is when p is {.}* for all rest of p
    // OR if s is not empty but p is a special case where it can fit any thing
    if (s.length === 0 || p.includes('.*')) {
        let copyP = p;
        while (copyP.charAt(1) === '*') {
            copyP = copyP.substring(2);
        }
        if (copyP.length === 0) return true;
    }
    
    const firstMatch = s.length > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.');

    if (p.length >= 2 && p.charAt(1) === '*') {
        // either 0 occrence OR matches found and continue to find more match by recurrsion
        const matchZero = isMatch(s, p.substring(2));
        const matchOne = firstMatch && isMatch(s.substring(1), p);

        //console.log('s: ' + s + ' p: ' + p);
        //console.log('matchZero: ' + matchZero + ' matchOne: ' + matchOne);
        return matchZero || matchOne;
    } else {
        // match by each char
        const match =  firstMatch && isMatch(s.substring(1), p.substring(1));
        
        //console.log('match: ' + match);
        return match;
    }

    return false;
};


//const result1 = isMatch('aac', 'a.*.*ac');
//const result2 = isMatch("aaaaaabaabcabac", ".*a*a*.*b*b*");
//const result3 = isMatch("aab", "c*a*b");
const result4 = isMatch("bbbba", ".*a*a");


console.log(result4);

