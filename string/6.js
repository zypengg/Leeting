/*
6. Zigzag Conversion
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000

*/

/*

OPTION #1:

input: "0123456789(10)(11)(12)(13)(14)(15)(16)", numRow = 3

0   4   8     12    16
1 3 5 7 9  11 13 15
2   6   10    14 

arr = [[], [] ,[]];

loop through each char and append to appropriate inner arrary in arr

i = 0, i + (numRow + numRow - 2) // 2 * numRow - 2

*/

/*
OPTION #2: 

input: "0123456789(10)(11)(12)(13)(14)(15)(16)", numRow = 3

0   4   8     12    16
1 3 5 7 9  11 13 15
2   6   10    14 


Use n to represent numRow
i = 0; i++ (index for each row)
r = 1; r++ (which row)

row 0: (i * n) + ((n - 2)* i) = i (n + n - 2) = i (2 * n - 2)

for rows between
row r: either i (2 * n - 2) + r or (i + 1) (2 * n - 2) - r alternating

row rowNum-1: i (2 * n - 2) + n - 1

n: 3
i:      0 1 2  3  4
row0:   0 4 8  12 16

rowN:   2 6 10 14


row 1: 

*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
     if (numRows == 1) {
         return s;
     }

    let result = [];
    let sCopy = s;

    for (let i = 0; i < numRows; i++) {
        result[i] = '';
    }

    for (let i = 0; i < s.length; i += (2 * numRows - 2)) {
        // vertical

        //console.log('-----');
        //console.log("i: " + i + " s.length: " + s.length);
        for (let row = 0; row < numRows; row++) {
            if (sCopy.length > 0) {
                result[row] = result[row].concat(sCopy.charAt(0));
                sCopy = sCopy.substring(1);
                //console.log(sCopy.charAt(0));
            }
        }
        // diagonal for bottom up
        for (let row = numRows - 2; row > 0; row --) {
            if (sCopy.length > 0) {
                result[row] = result[row].concat(sCopy.charAt(0));
                sCopy = sCopy.substring(1);
                //console.log(sCopy.charAt(0));
            }
        }
    }

    //console.log(result.join(''));

    return result.join('');
}


const testCase1 = '0123456789'; // 1 2 3
const testCase2 = 'PAYPALISHIRING'; // 3 4
const testCase3 = '^'; // 1
convert(testCase1, 1);