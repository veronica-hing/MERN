/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    //i traverses sortedA, k traverses sortedB
    let i = 0; k = 0;
    //we need a return array of the union
    let unionArr =[];
    if(sortedA.length == 0){
      return sortedB;
    }else if(sortedB.length == 0){
      return sortedA;
    }
    while(i < sortedA.length && k < sortedB.length){
      //stuff from A and B are equal
      if(sortedA[i] == sortedB[k]){
        unionArr.push(sortedA[i]);
        i++;
        k++;
      }//stuff from A is less than B
      else if(sortedA[i] < sortedB[k]){
        unionArr.push(sortedA[i]);
        i++;
      }//stuff from B is less than A
      else{
        unionArr.push(sortedB[k]);
        k++;
      }
    }//have everything up until the smaller one runs out
    
    //add in the rest of the larger array
    if(sortedA.length > sortedB.length){
      unionArr = [...unionArr, ...sortedA.slice(k)];
    }else{
      unionArr = [...unionArr, ...sortedB.slice(i)];
    }
    return unionArr;
}

console.log(orderedMultisetUnion(nums1A,nums1B));
console.log(orderedMultisetUnion(nums2A,nums2B));
console.log(orderedMultisetUnion(nums3A,nums3B));
console.log(orderedMultisetUnion(nums4A,nums4B));
console.log(orderedMultisetUnion(nums5A,nums5B));