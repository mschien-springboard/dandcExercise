function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx + 1;
}

function findFirst(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        // if the midpoint index is zero or num is greater than the value left of midpoint && the midpoint value is equal to num, then we've found the first occurance of num. this is the break point or "base case"
        if ((middleIdx === 0 || num > arr[middleIdx - 1]) && arr[middleIdx] === num) {
            return middleIdx;
            // if num is greater than value of midpoint, shift midpoint right by 1, then run function recursively.
        } else if (num > arr[middleIdx]) {
            return findFirst(arr, num, middleIdx + 1, rightIdx)
            // else shift midpoint left by 1, then run function recursively
        } else {
            return findFirst(arr, num, leftIdx, middleIdx - 1)
        }
    }
    return -1
}

function findLast(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        // same as above but checks if midpoint is last value in arr or num is less than the value right of midpoint && value of mid point is num.
        if ((middleIdx === arr.length - 1 || num < arr[middleIdx + 1]) && arr[middleIdx] === num) {
            return middleIdx;
            // shifts midpoint left by 1 if num is less than midpoint value, run recursively
        } else if (num < arr[middleIdx]) {
            return findLast(arr, num, leftIdx, middleIdx - 1)
            // else shifts midpoint right, and run recursively
        } else {
            return findLast(arr, num, middleIdx + 1, rightIdx)
        }
    }
    return -1
}

module.exports = sortedFrequency