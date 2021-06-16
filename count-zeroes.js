function countZeroes(arr) {
    // add whatever parameters you deem necessary - good luck!
    let firstZero = findFirst(arr)
    if (firstZero === -1) return 0;
    //  length of array - firstZero's index = number of 0s in a sorted array
    return arr.length - firstZero
}

function findFirst(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    // if left and right index havent crossed
    if (rightIdx >= leftIdx) {
        let middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
        // if midpoint value is 0 or left of mid point value is 1 && midpoint value is 0, return index of firstzero 
        if ((middleIdx === 0 || arr[middleIdx - 1] === 1) && arr[middleIdx] === 0) {
            return middleIdx;
            // if midpoint value is one move index right by 1 and look for zero again recursively
        } else if (arr[middleIdx] === 1) {
            return findFirst(arr, middleIdx + 1, rightIdx)
        }
        // move through left side recursively if zero is found
        return findFirst(arr, leftIdx, middleIdx - 1)
    }
    return -1;
}



module.exports = countZeroes