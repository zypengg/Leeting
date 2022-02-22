/*

3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/


//
// need something to keep track of the longest substring found so far
// need to move a left or right index
// slide index right to extend the substring
// what if: 
// dupe not found? -> keep moving right, keep left the same
// dupe found? -> check where the 1st dupe is and move the left to that spot and keep extending right
// how to check duep:
// add current char to a hashmap (key: char, val: index)
// terminate when:
// we go through the string once


/**

 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    // keep track of left and right: i j
    // move j ++
    // if j is a dupe of the str so far, move i to the first dupe char (** only if the first dupe char is still within the left and right range! check test case abba)
    // keep track of result every time we move on
    const str = s.split('');
    let l = 0;
    let r = 0;
    let map = new Map(); // key char, index 
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        //console.log('------');
        map.set(s.charAt(i), i);
        r++;
        const rChar = s.charAt(r);

        //console.log(map);
        
        //console.log(rChar);

        if (map.has(rChar)) {
            const dupeIndex = map.get(rChar) + 1;

            //console.log("dupeIndex = " + dupeIndex);
            //console.log("l = " + l);
            //console.log("r = " + r);

            if (l <= dupeIndex && dupeIndex <= r) {
                l = dupeIndex;
            }
            //console.log("new l = " + l);
            //console.log("new r = " + r);
        }

        const currentStr = s.substring(l, r + 1);
        if (currentStr.length > result.length) {
            result = currentStr;
            //console.log(currentStr);
        }
    }

    return result.length;
};


const testCase1 = "abba"
const testCase2 = "anviaj"
const testCase3 = "abcabcbb"
console.log(lengthOfLongestSubstring(testCase1));