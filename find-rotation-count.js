function findRotationCount(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx < leftIdx) return 0;
    if (rightIdx === leftIdx) return leftIdx;
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    // Check if element (mid+1) is minimum element.
    // Consider the cases like [3, 4, 5, 1, 2]
    if (middleIdx < rightIdx && arr[middleIdx + 1] < arr[middleIdx])
        return middleIdx + 1;

    // Check if mid itself is minimum element
    if (middleIdx > leftIdx && arr[middleIdx] < arr[middleIdx - 1]) {
        return middleIdx;
    }

    // Decide whether we need to go to left half or
    // right half
    if (arr[rightIdx] > arr[middleIdx]) {
        return findRotationCount(arr, leftIdx, middleIdx - 1);
    }

    return findRotationCount(arr, middleIdx + 1, rightIdx);
}

module.exports = findRotationCount