/*
15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const twoSum = (nums, target) => {
	const numMap = new Map();
	let pairs = [];
	nums.forEach((n) => {
		if (numMap[n] !== undefined) {
			pairs.push([numMap[n], n]);
		} else {
			numMap[target - n] = n;
		}
	});
	return pairs;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let result = [];
	let resultMap = new Map(); // for const compare time

	// return all pairs that add to target
	const arr = [1, 2, 3];

	const includesTriplet = (arr, triplet) => {
		return (
			arr.filter((a) => {
				return (
					a[0] === triplet[0] &&
					a[1] === triplet[1] &&
					a[2] === triplet[2]
				);
			}).length > 0
		);
	};

	for (let i = 0; i < nums.length; i++) {
		// for each num in nums
		// find the rest of the 2 that adds up to -n so that the sum is 0
		//console.log("n: " + n);
		let numCopy = [...nums];
		numCopy.splice(i, 1);
		const pairs = twoSum(numCopy, -nums[i]);
		pairs.forEach((p) => {
			const triplet = p.concat(nums[i]).sort();
			const tripletString = triplet[0]
				.toString()
				.concat(triplet[1].toString());

			//console.log("---");
			//console.log("triplet:" + triplet);
			//console.log("result:" + result);
			//console.log("tripletString:" + tripletString);
			//console.log("resultMap:");
			if (resultMap[tripletString] === undefined) {
				resultMap[tripletString] = triplet[2];
				result.push(triplet);
			}
		});
		//console.log(pairs);
	}
	return result;
};

const test1 = [-1, 0, 1, 2, -1, -4];
const test2 = [0, 0, 0];

console.log(threeSum(test2));
