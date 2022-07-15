// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const nums2 = [];
const sum2 = 5;
const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) {
    let resultSets = [];
    //nested loops since we need two pointers
    for(i= 0; i < nums.length; i++){
        let j = i+1;
        let tempSet = [nums[i]];
        let sum = nums[i];
        while((sum + nums[j]) <= targetSum){
            sum += nums[j];
            //if(nums[j+1] == 0 && sum == targetSum){
            if(sum == targetSum && (sum + nums[j] == targetSum)){
                    console.log("hello from if statement");
                    //need to break reference to the temporary set
                    resultSets.push([...tempSet]);    
                }
            tempSet.push(nums[j]);
            j++;
        }
        if(sum == targetSum){
            //need to break reference to the temporary set, so create a new one with spread
            resultSets.push([...tempSet]);
        }
    }
    return resultSets;
}

console.log(findConsqSums(nums1,16));
console.log(findConsqSums(nums2,5));
console.log(findConsqSums(nums3,5));
console.log(findConsqSums(nums4,16));
console.log(findConsqSums(nums5,-16));