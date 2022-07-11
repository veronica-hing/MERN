/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [];//[10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    //declare two index variables, i for sortedA, k for sortedB
    let i = 0,k= 0;
    //know two arrays are sorted 
    let overlap = new Set();//overlapping array is a Set so we don't have duplicates
    //while indexes are within bounds of shortest array
    while(i < sortedA.length && k < sortedB.length){
        if(sortedA[i] == sortedB[k]){
            overlap.add(sortedA[i]);//add the item into the set
            //increment our indexes to continue while loop
            i++;
            k++;
        }else if(sortedA[i]< sortedB[k]){
            i++;
        }else{
            k++;
        }
    }
    const intersection = Array.from(overlap);
    return intersection;
}

console.log(orderedIntersection(numsA1,numsB1));
console.log(orderedIntersection(numsA2,numsB2));
console.log(orderedIntersection(numsA3,numsB3));