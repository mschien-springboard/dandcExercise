function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr)
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
        return binarySearch(arr, num, 0, pivot - 1);
    } else {
        return binarySearch(arr, num, pivot, arr.length - 1);
    }
}

function binarySearch(arr, num, leftIdx, rightIdx) {
    if (arr.length === 0) return -1;
    if (num < arr[leftIdx] || num > arr[rightIdx]) return -1;

    if (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] === num) {
            return middleIdx;
        }
        if (arr[middleIdx] > num) {
            return binarySearch(arr, num, leftIdx, middleIdx - 1);
        }
        return binarySearch(arr, num, middleIdx + 1, rightIdx);
    }
    return -1;
}

// recursive pivot helper
function findPivot(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1])
        return 0;
    if (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] > arr[middleIdx + 1]) {
            return middleIdx + 1;
        } else if (arr[leftIdx] <= arr[middleIdx]) {
            return findPivot(arr, middleIdx + 1, rightIdx)
        } else {
            return findPivot(arr, leftIdx, middleIdx - 1)
        }
    }
}


module.exports = findRotatedIndex