/**
 * From a Chipotle interview.
 * encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
 *
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 */

 const riverLevels1 = [15, 17, 30];
 const expected1 = 15; // 30 - 15 = 15
 
 const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
 const expected2 = 20; // 25 - 5 = 20
 
 const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
 const expected3 = 11; // 12 - 1 = 11
 
 const riverLevels4 = [1, 5];
 const expected4 = 4;
 
 const riverLevels5 = [5, 1];
 const expected5 = -1;
 
 const riverLevels6 = [9, 7, 7, 7];
 const expected6 = -1;
 
 const riverLevels7 = [42];
 const expected7 = -1;
 
 /**
  * It ain't much, but it's honest work. A worker who measures water level
  * fluctuations in a river is asked to find the largest fluctuation in water
  * levels during a day, but only for rises in water levels.
  * - Time: O(?).
  * - Space: O(?).
  * @param {Array<number>} waterLevels Non-empty .
  * @returns {number} The max water-level rise amount or -1 if none.
  */
 function measureWaterLevelsRec(waterLevels, max=-1) {
    if(waterLevels.length == 0){
        return max;
    }
    let first = waterLevels[0];
    let last = waterLevels[waterLevels.length-1];
    if(max < last - first){
        max = last - first;
    }
    console.log(max);
    measureWaterLevels(waterLevels.slice(1,waterLevels.length-1), max);
 }

//measureWaterLevelsRec(riverLevels2);

function measureWaterLevels(waterLevels) {

    let max = -1;
    for(let i = 0; i < waterLevels.length; i++){
        for(k = i+1; k < waterLevels.length; k++){
            if(waterLevels[k] - waterLevels[i] > max && waterLevels[k] != waterLevels[i]){
                max = waterLevels[k] - waterLevels[i];
            }
        }    
    }
    return max;
 }
//  console.log(measureWaterLevels(riverLevels1));
//  console.log(measureWaterLevels(riverLevels2));
//  console.log(measureWaterLevels(riverLevels3));
//  console.log(measureWaterLevels(riverLevels4));
//  console.log(measureWaterLevels(riverLevels5));
//  console.log(measureWaterLevels(riverLevels6));
//  console.log(measureWaterLevels(riverLevels7));

function measWaterLevels(levels){
    let largestRise = -1;
    let lowestLevel = levels[0];
    for(let i = 1; i < levels.length; i++){
        if(levels[i] - lowestLevel > largestRise){
            largestRise = levels[i] - lowestLevel;
        }else if(levels[i] < lowestLevel){
            lowestLevel = levels[i];
        }
    }
    return largestRise == 0 ?  -1: largestRise;
}

console.log(measWaterLevels(riverLevels1));
console.log(measWaterLevels(riverLevels2));
console.log(measWaterLevels(riverLevels3));
console.log(measWaterLevels(riverLevels4));
console.log(measWaterLevels(riverLevels5));
console.log(measWaterLevels(riverLevels6));
console.log(measWaterLevels(riverLevels7));