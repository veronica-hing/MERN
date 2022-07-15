// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
 function twoSum(nums, targetSum) {
    // for each index
    // if targetVal - that value exists
    // we return those two
    let googleMap = new Map();

    for(var i = 0; i < nums.length ; i ++){
        // is that key that equals target - current in the object
        // is that the same as i right now?
        let searchKey = targetSum - nums[i];
        if(googleMap.hasOwnProperty(searchKey)){
            console.log("found it");
            return [googleMap[targetSum - nums[i]], i]
        }
        googleMap[nums[i]] = i;

    }
}